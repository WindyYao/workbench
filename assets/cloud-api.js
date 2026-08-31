(function () {
  'use strict';
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') return;

  var CORS = 'https://api.allorigins.win/raw?url=';
  function corsFetch(url) { return fetch(CORS + encodeURIComponent(url)).then(function (r) { return r.text(); }); }
  function corsFetchJson(url) { return corsFetch(url).then(function (t) { try { return JSON.parse(t); } catch (e) { return null; } }); }

  function nowCN() { return new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); }

  if (typeof RealData !== 'undefined') {
    RealData.fetchGold = function () {
      corsFetch('https://hq.sinajs.cn/list=hf_XAU').then(function (text) {
        var m = text.match(/"([^"]+)"/);
        if (!m) return;
        var p = m[1].split(',');
        var price = parseFloat(p[0]);
        var prevClose = parseFloat(p[8]) || parseFloat(p[7]) || price;
        var change = price - prevClose;
        var pct = prevClose ? (change / prevClose * 100) : 0;
        GOLD_DATA.intl = { price: +price.toFixed(2), change: +change.toFixed(2), changePercent: +pct.toFixed(2), open: +(parseFloat(p[2])||price).toFixed(2), high: +(parseFloat(p[4])||price).toFixed(2), low: +(parseFloat(p[5])||price).toFixed(2), unit: '美元/盎司', source: 'Sina Finance', time: nowCN() };
        var r = price / 31.1035 * 7.2;
        GOLD_DATA.icbc = { buyPrice: Math.round((r+3)*100)/100, sellPrice: Math.round((r-1.5)*100)/100, ruyiBuy: Math.round((r+4.5)*100)/100, ruyiSell: Math.round((r+0.8)*100)/100, unit: '元/克', source: '基于国际金价换算', range: {low: Math.round((r-2)*100)/100, high: Math.round((r+5)*100)/100}, time: GOLD_DATA.intl.time };
        GOLD_DATA.boc = { price: Math.round((r+2)*100)/100, investPrice: Math.round((r+15)*100)/100, unit: '元/克', source: '基于国际金价换算', time: GOLD_DATA.intl.time };
        renderGold();
        var el = document.getElementById('goldUpdateTime');
        if (el) el.innerHTML = '<span class="realtime-tag"><span class="realtime-dot"></span>实时</span>';
      }).catch(function () {});
    };

    RealData.fetchHot = function () {
      corsFetchJson('https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all').then(function (json) {
        if (json && json.code === 0 && json.data) {
          var items = json.data.list.slice(0, 20).map(function (item, idx) {
            return { rank: idx + 1, title: item.title, bvid: item.bvid, pic: item.pic && item.pic.startsWith('//') ? 'https:' + item.pic : item.pic, author: item.owner.name, play: item.stat.view, like: item.stat.like, coin: item.stat.coin, share: item.stat.share };
          });
          if (typeof renderHot === 'function') renderHot({ bilibili: items });
        }
      }).catch(function () {});
    };

    RealData.fetchNews = function () {
      corsFetchJson('https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc').then(function (j2) {
        if (j2 && j2.data) {
          var items = j2.data.map(function (item, idx) { return { rank: idx+1, title: item.Title, summary: '', url: item.Url || '', hot: item.HotValue || 0, source: '头条热榜' }; });
          if (typeof renderNews === 'function') renderNews(items);
        }
      }).catch(function () {});
    };

    RealData.fetchListening = function (src) {
      var feeds = {
        bbc: ['https://feeds.megaphone.fm/BBC6MinuteEnglish', 'https://podcasts.files.bbci.co.uk/p02pc9xn.rss'],
        voa: ['https://learningenglish.voanews.com/rss/', 'https://www.voanews.com/rss/3521'],
        ted: ['https://feeds.feedburner.com/TEDTalks_audio', 'https://feeds.megaphone.fm/TEDTalksDaily']
      };
      var urls = feeds[src] || feeds.bbc;
      function tryFeed(idx) {
        if (idx >= urls.length) { if (typeof renderListening === 'function') renderListening([]); return; }
        corsFetch(urls[idx]).then(function (xml) {
          if (!xml || xml.length < 100) { tryFeed(idx + 1); return; }
          var items = [];
          var re = /<item>([\s\S]*?)<\/item>/g;
          var match, count = 0;
          while ((match = re.exec(xml)) && count < 10) {
            var x = match[1];
            var title = (x.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [,''])[1].trim();
            var desc = (x.match(/<description[^>]*>([\s\S]*?)<\/description>/i) || [,''])[1].replace(/<[^>]+>/g, '').substring(0, 200);
            var pubDate = (x.match(/<pubDate[^>]*>([^<]+)<\/pubDate>/i) || [,''])[1].substring(0, 16);
            var audioUrl = '';
            var encM = x.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="audio[^"]*"/i);
            if (encM) audioUrl = encM[1];
            var durM = x.match(/<itunes:duration[^>]*>(\d+)<\/itunes:duration>/i);
            var duration = '';
            if (durM) { var secs = parseInt(durM[1]); duration = secs > 3600 ? Math.floor(secs/3600)+':'+String(Math.floor((secs%3600)/60)).padStart(2,'0')+':'+String(secs%60).padStart(2,'0') : Math.floor(secs/60)+':'+String(secs%60).padStart(2,'0'); }
            if (title && audioUrl) { items.push({ rank: count+1, title: title, summary: desc, audio: audioUrl, date: pubDate, duration: duration, source: src.toUpperCase() }); count++; }
          }
          if (items.length > 0) { if (typeof renderListening === 'function') renderListening(items); }
          else tryFeed(idx + 1);
        }).catch(function () { tryFeed(idx + 1); });
      }
      tryFeed(0);
    };

    RealData.start = function () {
      this.fetchGold();
      this.fetchHot();
      this.fetchNews();
      this.fetchListening('bbc');
      this.timers.gold = setInterval(this.fetchGold, 5 * 60 * 1000);
      this.timers.hot = setInterval(this.fetchHot, 10 * 60 * 1000);
      this.timers.news = setInterval(this.fetchNews, 10 * 60 * 1000);
    };
  }

  if (typeof CloudSync !== 'undefined') {
    CloudSync.save = function (silent) { if (!silent && typeof showSyncBanner === 'function') showSyncBanner('💾', '数据已保存在本地浏览器'); };
    CloudSync.forceLoad = function () { return Promise.resolve(false); };
    CloudSync.startAutoSync = function () {
      Backup.start();
      this.loaded = true;
    };
  }
})();