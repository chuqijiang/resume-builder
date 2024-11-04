import { useMemo as $e, createContext as we, useContext as ke, useEffect as me, useState as Ee } from "react";
import { useBreakpoint as Ce } from "use-breakpoint";
import { useFormContext as De } from "react-hook-form";
import { useMediaQuery as Oe, useLocalStorage as xe } from "usehooks-ts";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Se = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(C, q) {
  (function(F, _) {
    C.exports = _();
  })(be, function F() {
    var _ = typeof self < "u" ? self : typeof window < "u" ? window : _ !== void 0 ? _ : {}, I = !_.document && !!_.postMessage, z = _.IS_PAPA_WORKER || !1, W = {}, V = 0, p = { parse: function(t, e) {
      var n = (e = e || {}).dynamicTyping || !1;
      if (E(n) && (e.dynamicTypingFunction = n, n = {}), e.dynamicTyping = n, e.transform = !!E(e.transform) && e.transform, e.worker && p.WORKERS_SUPPORTED) {
        var s = function() {
          if (!p.WORKERS_SUPPORTED) return !1;
          var g = (u = _.URL || _.webkitURL || null, i = F.toString(), p.BLOB_URL || (p.BLOB_URL = u.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", i, ")();"], { type: "text/javascript" })))), f = new _.Worker(g), u, i;
          return f.onmessage = _e, f.id = V++, W[f.id] = f;
        }();
        return s.userStep = e.step, s.userChunk = e.chunk, s.userComplete = e.complete, s.userError = e.error, e.step = E(e.step), e.chunk = E(e.chunk), e.complete = E(e.complete), e.error = E(e.error), delete e.worker, void s.postMessage({ input: t, config: e, workerId: s.id });
      }
      var c = null;
      return p.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(g) {
        return g.charCodeAt(0) === 65279 ? g.slice(1) : g;
      }(t), c = e.download ? new U(e) : new B(e)) : t.readable === !0 && E(t.read) && E(t.on) ? c = new Z(e) : (_.File && t instanceof File || t instanceof Object) && (c = new ae(e)), c.stream(t);
    }, unparse: function(t, e) {
      var n = !1, s = !0, c = ",", g = `\r
`, f = '"', u = f + f, i = !1, r = null, o = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || p.BAD_DELIMITERS.filter(function(h) {
            return e.delimiter.indexOf(h) !== -1;
          }).length || (c = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (n = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (i = e.skipEmptyLines), typeof e.newline == "string" && (g = e.newline), typeof e.quoteChar == "string" && (f = e.quoteChar), typeof e.header == "boolean" && (s = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            r = e.columns;
          }
          e.escapeChar !== void 0 && (u = e.escapeChar + f), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (o = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var a = new RegExp(oe(f), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return l(null, t, i);
        if (typeof t[0] == "object") return l(r || Object.keys(t[0]), t, i);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || r), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), l(t.fields || [], t.data || [], i);
      throw new Error("Unable to serialize unrecognized input");
      function l(h, v, w) {
        var k = "";
        typeof h == "string" && (h = JSON.parse(h)), typeof v == "string" && (v = JSON.parse(v));
        var M = Array.isArray(h) && 0 < h.length, O = !Array.isArray(v[0]);
        if (M && s) {
          for (var T = 0; T < h.length; T++) 0 < T && (k += c), k += y(h[T], T);
          0 < v.length && (k += g);
        }
        for (var d = 0; d < v.length; d++) {
          var m = M ? h.length : v[d].length, b = !1, x = M ? Object.keys(v[d]).length === 0 : v[d].length === 0;
          if (w && !M && (b = w === "greedy" ? v[d].join("").trim() === "" : v[d].length === 1 && v[d][0].length === 0), w === "greedy" && M) {
            for (var $ = [], P = 0; P < m; P++) {
              var A = O ? h[P] : P;
              $.push(v[d][A]);
            }
            b = $.join("").trim() === "";
          }
          if (!b) {
            for (var S = 0; S < m; S++) {
              0 < S && !x && (k += c);
              var G = M && O ? h[S] : S;
              k += y(v[d][G], S);
            }
            d < v.length - 1 && (!w || 0 < m && !x) && (k += g);
          }
        }
        return k;
      }
      function y(h, v) {
        if (h == null) return "";
        if (h.constructor === Date) return JSON.stringify(h).slice(1, 25);
        var w = !1;
        o && typeof h == "string" && o.test(h) && (h = "'" + h, w = !0);
        var k = h.toString().replace(a, u);
        return (w = w || n === !0 || typeof n == "function" && n(h, v) || Array.isArray(n) && n[v] || function(M, O) {
          for (var T = 0; T < O.length; T++) if (-1 < M.indexOf(O[T])) return !0;
          return !1;
        }(k, p.BAD_DELIMITERS) || -1 < k.indexOf(c) || k.charAt(0) === " " || k.charAt(k.length - 1) === " ") ? f + k + f : k;
      }
    } };
    if (p.RECORD_SEP = "", p.UNIT_SEP = "", p.BYTE_ORDER_MARK = "\uFEFF", p.BAD_DELIMITERS = ["\r", `
`, '"', p.BYTE_ORDER_MARK], p.WORKERS_SUPPORTED = !I && !!_.Worker, p.NODE_STREAM_INPUT = 1, p.LocalChunkSize = 10485760, p.RemoteChunkSize = 5242880, p.DefaultDelimiter = ",", p.Parser = le, p.ParserHandle = de, p.NetworkStreamer = U, p.FileStreamer = ae, p.StringStreamer = B, p.ReadableStreamStreamer = Z, _.jQuery) {
      var N = _.jQuery;
      N.fn.parse = function(t) {
        var e = t.config || {}, n = [];
        return this.each(function(g) {
          if (!(N(this).prop("tagName").toUpperCase() === "INPUT" && N(this).attr("type").toLowerCase() === "file" && _.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var f = 0; f < this.files.length; f++) n.push({ file: this.files[f], inputElem: this, instanceConfig: N.extend({}, e) });
        }), s(), this;
        function s() {
          if (n.length !== 0) {
            var g, f, u, i, r = n[0];
            if (E(t.before)) {
              var o = t.before(r.file, r.inputElem);
              if (typeof o == "object") {
                if (o.action === "abort") return g = "AbortError", f = r.file, u = r.inputElem, i = o.reason, void (E(t.error) && t.error({ name: g }, f, u, i));
                if (o.action === "skip") return void c();
                typeof o.config == "object" && (r.instanceConfig = N.extend(r.instanceConfig, o.config));
              } else if (o === "skip") return void c();
            }
            var a = r.instanceConfig.complete;
            r.instanceConfig.complete = function(l) {
              E(a) && a(l, r.file, r.inputElem), c();
            }, p.parse(r.file, r.instanceConfig);
          } else E(t.complete) && t.complete();
        }
        function c() {
          n.splice(0, 1), s();
        }
      };
    }
    function j(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var n = ee(e);
        n.chunkSize = parseInt(n.chunkSize), e.step || e.chunk || (n.chunkSize = null), this._handle = new de(n), (this._handle.streamer = this)._config = n;
      }).call(this, t), this.parseChunk = function(e, n) {
        if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
          var s = this._config.beforeFirstChunk(e);
          s !== void 0 && (e = s);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var c = this._partialLine + e;
        this._partialLine = "";
        var g = this._handle.parse(c, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var f = g.meta.cursor;
          this._finished || (this._partialLine = c.substring(f - this._baseIndex), this._baseIndex = f), g && g.data && (this._rowCount += g.data.length);
          var u = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (z) _.postMessage({ results: g, workerId: p.WORKER_ID, finished: u });
          else if (E(this._config.chunk) && !n) {
            if (this._config.chunk(g, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            g = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(g.data), this._completeResults.errors = this._completeResults.errors.concat(g.errors), this._completeResults.meta = g.meta), this._completed || !u || !E(this._config.complete) || g && g.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), u || g && g.meta.paused || this._nextChunk(), g;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        E(this._config.error) ? this._config.error(e) : z && this._config.error && _.postMessage({ workerId: p.WORKER_ID, error: e, finished: !1 });
      };
    }
    function U(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = p.RemoteChunkSize), j.call(this, t), this._nextChunk = I ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(n) {
        this._input = n, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), I || (e.onload = H(this._chunkLoaded, this), e.onerror = H(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !I), this._config.downloadRequestHeaders) {
            var n = this._config.downloadRequestHeaders;
            for (var s in n) e.setRequestHeader(s, n[s]);
          }
          if (this._config.chunkSize) {
            var c = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + c);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (g) {
            this._chunkError(g.message);
          }
          I && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(n) {
          var s = n.getResponseHeader("Content-Range");
          return s === null ? -1 : parseInt(s.substring(s.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(n) {
        var s = e.statusText || n;
        this._sendError(new Error(s));
      };
    }
    function ae(t) {
      var e, n;
      (t = t || {}).chunkSize || (t.chunkSize = p.LocalChunkSize), j.call(this, t);
      var s = typeof FileReader < "u";
      this.stream = function(c) {
        this._input = c, n = c.slice || c.webkitSlice || c.mozSlice, s ? ((e = new FileReader()).onload = H(this._chunkLoaded, this), e.onerror = H(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var c = this._input;
        if (this._config.chunkSize) {
          var g = Math.min(this._start + this._config.chunkSize, this._input.size);
          c = n.call(c, this._start, g);
        }
        var f = e.readAsText(c, this._config.encoding);
        s || this._chunkLoaded({ target: { result: f } });
      }, this._chunkLoaded = function(c) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(c.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function B(t) {
      var e;
      j.call(this, t = t || {}), this.stream = function(n) {
        return e = n, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var n, s = this._config.chunkSize;
          return s ? (n = e.substring(0, s), e = e.substring(s)) : (n = e, e = ""), this._finished = !e, this.parseChunk(n);
        }
      };
    }
    function Z(t) {
      j.call(this, t = t || {});
      var e = [], n = !0, s = !1;
      this.pause = function() {
        j.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        j.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(c) {
        this._input = c, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        s && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : n = !0;
      }, this._streamData = H(function(c) {
        try {
          e.push(typeof c == "string" ? c : c.toString(this._config.encoding)), n && (n = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (g) {
          this._streamError(g);
        }
      }, this), this._streamError = H(function(c) {
        this._streamCleanUp(), this._sendError(c);
      }, this), this._streamEnd = H(function() {
        this._streamCleanUp(), s = !0, this._streamData("");
      }, this), this._streamCleanUp = H(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function de(t) {
      var e, n, s, c = Math.pow(2, 53), g = -c, f = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, u = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i = this, r = 0, o = 0, a = !1, l = !1, y = [], h = { data: [], errors: [], meta: {} };
      if (E(t.step)) {
        var v = t.step;
        t.step = function(d) {
          if (h = d, M()) k();
          else {
            if (k(), h.data.length === 0) return;
            r += d.data.length, t.preview && r > t.preview ? n.abort() : (h.data = h.data[0], v(h, i));
          }
        };
      }
      function w(d) {
        return t.skipEmptyLines === "greedy" ? d.join("").trim() === "" : d.length === 1 && d[0].length === 0;
      }
      function k() {
        return h && s && (T("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + p.DefaultDelimiter + "'"), s = !1), t.skipEmptyLines && (h.data = h.data.filter(function(d) {
          return !w(d);
        })), M() && function() {
          if (!h) return;
          function d(b, x) {
            E(t.transformHeader) && (b = t.transformHeader(b, x)), y.push(b);
          }
          if (Array.isArray(h.data[0])) {
            for (var m = 0; M() && m < h.data.length; m++) h.data[m].forEach(d);
            h.data.splice(0, 1);
          } else h.data.forEach(d);
        }(), function() {
          if (!h || !t.header && !t.dynamicTyping && !t.transform) return h;
          function d(b, x) {
            var $, P = t.header ? {} : [];
            for ($ = 0; $ < b.length; $++) {
              var A = $, S = b[$];
              t.header && (A = $ >= y.length ? "__parsed_extra" : y[$]), t.transform && (S = t.transform(S, A)), S = O(A, S), A === "__parsed_extra" ? (P[A] = P[A] || [], P[A].push(S)) : P[A] = S;
            }
            return t.header && ($ > y.length ? T("FieldMismatch", "TooManyFields", "Too many fields: expected " + y.length + " fields but parsed " + $, o + x) : $ < y.length && T("FieldMismatch", "TooFewFields", "Too few fields: expected " + y.length + " fields but parsed " + $, o + x)), P;
          }
          var m = 1;
          return !h.data.length || Array.isArray(h.data[0]) ? (h.data = h.data.map(d), m = h.data.length) : h.data = d(h.data, 0), t.header && h.meta && (h.meta.fields = y), o += m, h;
        }();
      }
      function M() {
        return t.header && y.length === 0;
      }
      function O(d, m) {
        return b = d, t.dynamicTypingFunction && t.dynamicTyping[b] === void 0 && (t.dynamicTyping[b] = t.dynamicTypingFunction(b)), (t.dynamicTyping[b] || t.dynamicTyping) === !0 ? m === "true" || m === "TRUE" || m !== "false" && m !== "FALSE" && (function(x) {
          if (f.test(x)) {
            var $ = parseFloat(x);
            if (g < $ && $ < c) return !0;
          }
          return !1;
        }(m) ? parseFloat(m) : u.test(m) ? new Date(m) : m === "" ? null : m) : m;
        var b;
      }
      function T(d, m, b, x) {
        var $ = { type: d, code: m, message: b };
        x !== void 0 && ($.row = x), h.errors.push($);
      }
      this.parse = function(d, m, b) {
        var x = t.quoteChar || '"';
        if (t.newline || (t.newline = function(A, S) {
          A = A.substring(0, 1048576);
          var G = new RegExp(oe(S) + "([^]*?)" + oe(S), "gm"), K = (A = A.replace(G, "")).split("\r"), X = A.split(`
`), te = 1 < X.length && X[0].length < K[0].length;
          if (K.length === 1 || te) return `
`;
          for (var Y = 0, R = 0; R < K.length; R++) K[R][0] === `
` && Y++;
          return Y >= K.length / 2 ? `\r
` : "\r";
        }(d, x)), s = !1, t.delimiter) E(t.delimiter) && (t.delimiter = t.delimiter(d), h.meta.delimiter = t.delimiter);
        else {
          var $ = function(A, S, G, K, X) {
            var te, Y, R, L;
            X = X || [",", "	", "|", ";", p.RECORD_SEP, p.UNIT_SEP];
            for (var ue = 0; ue < X.length; ue++) {
              var D = X[ue], ce = 0, re = 0, he = 0;
              R = void 0;
              for (var ne = new le({ comments: K, delimiter: D, newline: S, preview: 10 }).parse(A), ie = 0; ie < ne.data.length; ie++) if (G && w(ne.data[ie])) he++;
              else {
                var se = ne.data[ie].length;
                re += se, R !== void 0 ? 0 < se && (ce += Math.abs(se - R), R = se) : R = se;
              }
              0 < ne.data.length && (re /= ne.data.length - he), (Y === void 0 || ce <= Y) && (L === void 0 || L < re) && 1.99 < re && (Y = ce, te = D, L = re);
            }
            return { successful: !!(t.delimiter = te), bestDelimiter: te };
          }(d, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          $.successful ? t.delimiter = $.bestDelimiter : (s = !0, t.delimiter = p.DefaultDelimiter), h.meta.delimiter = t.delimiter;
        }
        var P = ee(t);
        return t.preview && t.header && P.preview++, e = d, n = new le(P), h = n.parse(e, m, b), k(), a ? { meta: { paused: !0 } } : h || { meta: { paused: !1 } };
      }, this.paused = function() {
        return a;
      }, this.pause = function() {
        a = !0, n.abort(), e = E(t.chunk) ? "" : e.substring(n.getCharIndex());
      }, this.resume = function() {
        i.streamer._halted ? (a = !1, i.streamer.parseChunk(e, !0)) : setTimeout(i.resume, 3);
      }, this.aborted = function() {
        return l;
      }, this.abort = function() {
        l = !0, n.abort(), h.meta.aborted = !0, E(t.complete) && t.complete(h), e = "";
      };
    }
    function oe(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function le(t) {
      var e, n = (t = t || {}).delimiter, s = t.newline, c = t.comments, g = t.step, f = t.preview, u = t.fastMode, i = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (i = t.escapeChar), (typeof n != "string" || -1 < p.BAD_DELIMITERS.indexOf(n)) && (n = ","), c === n) throw new Error("Comment character same as delimiter");
      c === !0 ? c = "#" : (typeof c != "string" || -1 < p.BAD_DELIMITERS.indexOf(c)) && (c = !1), s !== `
` && s !== "\r" && s !== `\r
` && (s = `
`);
      var r = 0, o = !1;
      this.parse = function(a, l, y) {
        if (typeof a != "string") throw new Error("Input must be a string");
        var h = a.length, v = n.length, w = s.length, k = c.length, M = E(g), O = [], T = [], d = [], m = r = 0;
        if (!a) return Q();
        if (t.header && !l) {
          var b = a.split(s)[0].split(n), x = [], $ = {}, P = !1;
          for (var A in b) {
            var S = b[A];
            E(t.transformHeader) && (S = t.transformHeader(S, A));
            var G = S, K = $[S] || 0;
            for (0 < K && (P = !0, G = S + "_" + K), $[S] = K + 1; x.includes(G); ) G = G + "_" + K;
            x.push(G);
          }
          if (P) {
            var X = a.split(s);
            X[0] = x.join(n), a = X.join(s);
          }
        }
        if (u || u !== !1 && a.indexOf(e) === -1) {
          for (var te = a.split(s), Y = 0; Y < te.length; Y++) {
            if (d = te[Y], r += d.length, Y !== te.length - 1) r += s.length;
            else if (y) return Q();
            if (!c || d.substring(0, k) !== c) {
              if (M) {
                if (O = [], he(d.split(n)), ge(), o) return Q();
              } else he(d.split(n));
              if (f && f <= Y) return O = O.slice(0, f), Q(!0);
            }
          }
          return Q();
        }
        for (var R = a.indexOf(n, r), L = a.indexOf(s, r), ue = new RegExp(oe(i) + oe(e), "g"), D = a.indexOf(e, r); ; ) if (a[r] !== e) if (c && d.length === 0 && a.substring(r, r + k) === c) {
          if (L === -1) return Q();
          r = L + w, L = a.indexOf(s, r), R = a.indexOf(n, r);
        } else if (R !== -1 && (R < L || L === -1)) d.push(a.substring(r, R)), r = R + v, R = a.indexOf(n, r);
        else {
          if (L === -1) break;
          if (d.push(a.substring(r, L)), se(L + w), M && (ge(), o)) return Q();
          if (f && O.length >= f) return Q(!0);
        }
        else for (D = r, r++; ; ) {
          if ((D = a.indexOf(e, D + 1)) === -1) return y || T.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: O.length, index: r }), ie();
          if (D === h - 1) return ie(a.substring(r, D).replace(ue, e));
          if (e !== i || a[D + 1] !== i) {
            if (e === i || D === 0 || a[D - 1] !== i) {
              R !== -1 && R < D + 1 && (R = a.indexOf(n, D + 1)), L !== -1 && L < D + 1 && (L = a.indexOf(s, D + 1));
              var ce = ne(L === -1 ? R : Math.min(R, L));
              if (a.substr(D + 1 + ce, v) === n) {
                d.push(a.substring(r, D).replace(ue, e)), a[r = D + 1 + ce + v] !== e && (D = a.indexOf(e, r)), R = a.indexOf(n, r), L = a.indexOf(s, r);
                break;
              }
              var re = ne(L);
              if (a.substring(D + 1 + re, D + 1 + re + w) === s) {
                if (d.push(a.substring(r, D).replace(ue, e)), se(D + 1 + re + w), R = a.indexOf(n, r), D = a.indexOf(e, r), M && (ge(), o)) return Q();
                if (f && O.length >= f) return Q(!0);
                break;
              }
              T.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: O.length, index: r }), D++;
            }
          } else D++;
        }
        return ie();
        function he(J) {
          O.push(J), m = r;
        }
        function ne(J) {
          var ve = 0;
          if (J !== -1) {
            var ye = a.substring(D + 1, J);
            ye && ye.trim() === "" && (ve = ye.length);
          }
          return ve;
        }
        function ie(J) {
          return y || (J === void 0 && (J = a.substring(r)), d.push(J), r = h, he(d), M && ge()), Q();
        }
        function se(J) {
          r = J, he(d), d = [], L = a.indexOf(s, r);
        }
        function Q(J) {
          return { data: O, errors: T, meta: { delimiter: n, linebreak: s, aborted: o, truncated: !!J, cursor: m + (l || 0) } };
        }
        function ge() {
          g(Q()), O = [], T = [];
        }
      }, this.abort = function() {
        o = !0;
      }, this.getCharIndex = function() {
        return r;
      };
    }
    function _e(t) {
      var e = t.data, n = W[e.workerId], s = !1;
      if (e.error) n.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var c = { abort: function() {
          s = !0, fe(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: pe, resume: pe };
        if (E(n.userStep)) {
          for (var g = 0; g < e.results.data.length && (n.userStep({ data: e.results.data[g], errors: e.results.errors, meta: e.results.meta }, c), !s); g++) ;
          delete e.results;
        } else E(n.userChunk) && (n.userChunk(e.results, c, e.file), delete e.results);
      }
      e.finished && !s && fe(e.workerId, e.results);
    }
    function fe(t, e) {
      var n = W[t];
      E(n.userComplete) && n.userComplete(e), n.terminate(), delete W[t];
    }
    function pe() {
      throw new Error("Not implemented.");
    }
    function ee(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var n in t) e[n] = ee(t[n]);
      return e;
    }
    function H(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function E(t) {
      return typeof t == "function";
    }
    return z && (_.onmessage = function(t) {
      var e = t.data;
      if (p.WORKER_ID === void 0 && e && (p.WORKER_ID = e.workerId), typeof e.input == "string") _.postMessage({ workerId: p.WORKER_ID, results: p.parse(e.input, e.config), finished: !0 });
      else if (_.File && e.input instanceof File || e.input instanceof Object) {
        var n = p.parse(e.input, e.config);
        n && _.postMessage({ workerId: p.WORKER_ID, results: n, finished: !0 });
      }
    }), (U.prototype = Object.create(j.prototype)).constructor = U, (ae.prototype = Object.create(j.prototype)).constructor = ae, (B.prototype = Object.create(B.prototype)).constructor = B, (Z.prototype = Object.create(j.prototype)).constructor = Z, p;
  });
})(Se);
var Me = { exports: {} };
(function(C, q) {
  (function(F, _) {
    C.exports = _();
  })(be, function() {
    var F = 1e3, _ = 6e4, I = 36e5, z = "millisecond", W = "second", V = "minute", p = "hour", N = "day", j = "week", U = "month", ae = "quarter", B = "year", Z = "date", de = "Invalid Date", oe = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, le = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _e = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f) {
      var u = ["th", "st", "nd", "rd"], i = f % 100;
      return "[" + f + (u[(i - 20) % 10] || u[i] || u[0]) + "]";
    } }, fe = function(f, u, i) {
      var r = String(f);
      return !r || r.length >= u ? f : "" + Array(u + 1 - r.length).join(i) + f;
    }, pe = { s: fe, z: function(f) {
      var u = -f.utcOffset(), i = Math.abs(u), r = Math.floor(i / 60), o = i % 60;
      return (u <= 0 ? "+" : "-") + fe(r, 2, "0") + ":" + fe(o, 2, "0");
    }, m: function f(u, i) {
      if (u.date() < i.date()) return -f(i, u);
      var r = 12 * (i.year() - u.year()) + (i.month() - u.month()), o = u.clone().add(r, U), a = i - o < 0, l = u.clone().add(r + (a ? -1 : 1), U);
      return +(-(r + (i - o) / (a ? o - l : l - o)) || 0);
    }, a: function(f) {
      return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
    }, p: function(f) {
      return { M: U, y: B, w: j, d: N, D: Z, h: p, m: V, s: W, ms: z, Q: ae }[f] || String(f || "").toLowerCase().replace(/s$/, "");
    }, u: function(f) {
      return f === void 0;
    } }, ee = "en", H = {};
    H[ee] = _e;
    var E = "$isDayjsObject", t = function(f) {
      return f instanceof c || !(!f || !f[E]);
    }, e = function f(u, i, r) {
      var o;
      if (!u) return ee;
      if (typeof u == "string") {
        var a = u.toLowerCase();
        H[a] && (o = a), i && (H[a] = i, o = a);
        var l = u.split("-");
        if (!o && l.length > 1) return f(l[0]);
      } else {
        var y = u.name;
        H[y] = u, o = y;
      }
      return !r && o && (ee = o), o || !r && ee;
    }, n = function(f, u) {
      if (t(f)) return f.clone();
      var i = typeof u == "object" ? u : {};
      return i.date = f, i.args = arguments, new c(i);
    }, s = pe;
    s.l = e, s.i = t, s.w = function(f, u) {
      return n(f, { locale: u.$L, utc: u.$u, x: u.$x, $offset: u.$offset });
    };
    var c = function() {
      function f(i) {
        this.$L = e(i.locale, null, !0), this.parse(i), this.$x = this.$x || i.x || {}, this[E] = !0;
      }
      var u = f.prototype;
      return u.parse = function(i) {
        this.$d = function(r) {
          var o = r.date, a = r.utc;
          if (o === null) return /* @__PURE__ */ new Date(NaN);
          if (s.u(o)) return /* @__PURE__ */ new Date();
          if (o instanceof Date) return new Date(o);
          if (typeof o == "string" && !/Z$/i.test(o)) {
            var l = o.match(oe);
            if (l) {
              var y = l[2] - 1 || 0, h = (l[7] || "0").substring(0, 3);
              return a ? new Date(Date.UTC(l[1], y, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, h)) : new Date(l[1], y, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, h);
            }
          }
          return new Date(o);
        }(i), this.init();
      }, u.init = function() {
        var i = this.$d;
        this.$y = i.getFullYear(), this.$M = i.getMonth(), this.$D = i.getDate(), this.$W = i.getDay(), this.$H = i.getHours(), this.$m = i.getMinutes(), this.$s = i.getSeconds(), this.$ms = i.getMilliseconds();
      }, u.$utils = function() {
        return s;
      }, u.isValid = function() {
        return this.$d.toString() !== de;
      }, u.isSame = function(i, r) {
        var o = n(i);
        return this.startOf(r) <= o && o <= this.endOf(r);
      }, u.isAfter = function(i, r) {
        return n(i) < this.startOf(r);
      }, u.isBefore = function(i, r) {
        return this.endOf(r) < n(i);
      }, u.$g = function(i, r, o) {
        return s.u(i) ? this[r] : this.set(o, i);
      }, u.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, u.valueOf = function() {
        return this.$d.getTime();
      }, u.startOf = function(i, r) {
        var o = this, a = !!s.u(r) || r, l = s.p(i), y = function(d, m) {
          var b = s.w(o.$u ? Date.UTC(o.$y, m, d) : new Date(o.$y, m, d), o);
          return a ? b : b.endOf(N);
        }, h = function(d, m) {
          return s.w(o.toDate()[d].apply(o.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(m)), o);
        }, v = this.$W, w = this.$M, k = this.$D, M = "set" + (this.$u ? "UTC" : "");
        switch (l) {
          case B:
            return a ? y(1, 0) : y(31, 11);
          case U:
            return a ? y(1, w) : y(0, w + 1);
          case j:
            var O = this.$locale().weekStart || 0, T = (v < O ? v + 7 : v) - O;
            return y(a ? k - T : k + (6 - T), w);
          case N:
          case Z:
            return h(M + "Hours", 0);
          case p:
            return h(M + "Minutes", 1);
          case V:
            return h(M + "Seconds", 2);
          case W:
            return h(M + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, u.endOf = function(i) {
        return this.startOf(i, !1);
      }, u.$set = function(i, r) {
        var o, a = s.p(i), l = "set" + (this.$u ? "UTC" : ""), y = (o = {}, o[N] = l + "Date", o[Z] = l + "Date", o[U] = l + "Month", o[B] = l + "FullYear", o[p] = l + "Hours", o[V] = l + "Minutes", o[W] = l + "Seconds", o[z] = l + "Milliseconds", o)[a], h = a === N ? this.$D + (r - this.$W) : r;
        if (a === U || a === B) {
          var v = this.clone().set(Z, 1);
          v.$d[y](h), v.init(), this.$d = v.set(Z, Math.min(this.$D, v.daysInMonth())).$d;
        } else y && this.$d[y](h);
        return this.init(), this;
      }, u.set = function(i, r) {
        return this.clone().$set(i, r);
      }, u.get = function(i) {
        return this[s.p(i)]();
      }, u.add = function(i, r) {
        var o, a = this;
        i = Number(i);
        var l = s.p(r), y = function(w) {
          var k = n(a);
          return s.w(k.date(k.date() + Math.round(w * i)), a);
        };
        if (l === U) return this.set(U, this.$M + i);
        if (l === B) return this.set(B, this.$y + i);
        if (l === N) return y(1);
        if (l === j) return y(7);
        var h = (o = {}, o[V] = _, o[p] = I, o[W] = F, o)[l] || 1, v = this.$d.getTime() + i * h;
        return s.w(v, this);
      }, u.subtract = function(i, r) {
        return this.add(-1 * i, r);
      }, u.format = function(i) {
        var r = this, o = this.$locale();
        if (!this.isValid()) return o.invalidDate || de;
        var a = i || "YYYY-MM-DDTHH:mm:ssZ", l = s.z(this), y = this.$H, h = this.$m, v = this.$M, w = o.weekdays, k = o.months, M = o.meridiem, O = function(m, b, x, $) {
          return m && (m[b] || m(r, a)) || x[b].slice(0, $);
        }, T = function(m) {
          return s.s(y % 12 || 12, m, "0");
        }, d = M || function(m, b, x) {
          var $ = m < 12 ? "AM" : "PM";
          return x ? $.toLowerCase() : $;
        };
        return a.replace(le, function(m, b) {
          return b || function(x) {
            switch (x) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return s.s(r.$y, 4, "0");
              case "M":
                return v + 1;
              case "MM":
                return s.s(v + 1, 2, "0");
              case "MMM":
                return O(o.monthsShort, v, k, 3);
              case "MMMM":
                return O(k, v);
              case "D":
                return r.$D;
              case "DD":
                return s.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return O(o.weekdaysMin, r.$W, w, 2);
              case "ddd":
                return O(o.weekdaysShort, r.$W, w, 3);
              case "dddd":
                return w[r.$W];
              case "H":
                return String(y);
              case "HH":
                return s.s(y, 2, "0");
              case "h":
                return T(1);
              case "hh":
                return T(2);
              case "a":
                return d(y, h, !0);
              case "A":
                return d(y, h, !1);
              case "m":
                return String(h);
              case "mm":
                return s.s(h, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return s.s(r.$s, 2, "0");
              case "SSS":
                return s.s(r.$ms, 3, "0");
              case "Z":
                return l;
            }
            return null;
          }(m) || l.replace(":", "");
        });
      }, u.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, u.diff = function(i, r, o) {
        var a, l = this, y = s.p(r), h = n(i), v = (h.utcOffset() - this.utcOffset()) * _, w = this - h, k = function() {
          return s.m(l, h);
        };
        switch (y) {
          case B:
            a = k() / 12;
            break;
          case U:
            a = k();
            break;
          case ae:
            a = k() / 3;
            break;
          case j:
            a = (w - v) / 6048e5;
            break;
          case N:
            a = (w - v) / 864e5;
            break;
          case p:
            a = w / I;
            break;
          case V:
            a = w / _;
            break;
          case W:
            a = w / F;
            break;
          default:
            a = w;
        }
        return o ? a : s.a(a);
      }, u.daysInMonth = function() {
        return this.endOf(U).$D;
      }, u.$locale = function() {
        return H[this.$L];
      }, u.locale = function(i, r) {
        if (!i) return this.$L;
        var o = this.clone(), a = e(i, r, !0);
        return a && (o.$L = a), o;
      }, u.clone = function() {
        return s.w(this.$d, this);
      }, u.toDate = function() {
        return new Date(this.valueOf());
      }, u.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, u.toISOString = function() {
        return this.$d.toISOString();
      }, u.toString = function() {
        return this.$d.toUTCString();
      }, f;
    }(), g = c.prototype;
    return n.prototype = g, [["$ms", z], ["$s", W], ["$m", V], ["$H", p], ["$W", N], ["$M", U], ["$y", B], ["$D", Z]].forEach(function(f) {
      g[f[1]] = function(u) {
        return this.$g(u, f[0], f[1]);
      };
    }), n.extend = function(f, u) {
      return f.$i || (f(u, c, n), f.$i = !0), n;
    }, n.locale = e, n.isDayjs = t, n.unix = function(f) {
      return n(1e3 * f);
    }, n.en = H[ee], n.Ls = H, n.p = {}, n;
  });
})(Me);
const Te = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1400
}, He = () => {
  const { breakpoint: C, minWidth: q, maxWidth: F } = Ce(Te), { isMobile: _, isTablet: I, isDesktop: z } = $e(() => ({
    isMobile: C === "xs" || C === "sm" || C === "md",
    isTablet: C === "sm" || C === "md",
    isDesktop: C === "lg" || C === "xl" || C === "2xl"
  }), [C]);
  return {
    breakpoint: C,
    minWidth: q,
    maxWidth: F,
    isMobile: _,
    isTablet: I,
    isDesktop: z,
    devicePixelRatio: window.devicePixelRatio
  };
}, Re = we({}), Ie = we({}), Pe = () => {
  const C = ke(Re), q = ke(Ie), { getFieldState: F, formState: _ } = De();
  if (!C || !q)
    throw new Error("useFormField should be used within <FormField>");
  const I = F(C.name, _), { id: z } = q;
  return {
    id: z,
    name: C.name,
    formItemId: `${z}-form-item`,
    formDescriptionId: `${z}-form-item-description`,
    formMessageId: `${z}-form-item-message`,
    ...I
  };
}, We = (C) => {
  me(() => {
    const q = (F) => {
      var _, I;
      F.key === "Control" && ((I = (_ = C.current) == null ? void 0 : _.querySelector('input[name="password"]')) == null || I.setAttribute("type", "text"));
    };
    return window.addEventListener("keydown", q), () => {
      window.removeEventListener("keydown", q);
    };
  }, [C]), me(() => {
    const q = (F) => {
      var _, I;
      F.key === "Control" && ((I = (_ = C.current) == null ? void 0 : _.querySelector('input[name="password"]')) == null || I.setAttribute("type", "password"));
    };
    return window.addEventListener("keyup", q), () => {
      window.removeEventListener("keyup", q);
    };
  }, [C]);
}, Ae = "(prefers-color-scheme: dark)", qe = () => {
  const C = Oe(Ae), [q, F] = Ee(C), [_, I] = xe("theme", "system");
  me(() => {
    _ === "system" && F((W) => !W);
  }, [_]), me(() => {
    switch (_) {
      case "light": {
        F(!1);
        break;
      }
      case "system": {
        F(C);
        break;
      }
      case "dark": {
        F(!0);
        break;
      }
    }
  }, [_, C]);
  function z() {
    const W = {
      light: "system",
      system: "dark",
      dark: "light"
    };
    I((V) => W[V]);
  }
  return {
    theme: _,
    setTheme: I,
    isDarkMode: q,
    toggleTheme: z
  };
};
export {
  Re as FormFieldContext,
  Ie as FormItemContext,
  He as useBreakpoint,
  Pe as useFormField,
  We as usePasswordToggle,
  qe as useTheme
};
