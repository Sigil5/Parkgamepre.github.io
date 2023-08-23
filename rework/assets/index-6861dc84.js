function e() {
  import.meta.url;
  import("_").catch(() => 2); // Changed from 1 to 2
}

import {
  c as t,
  m as n,
  d as r,
  o as i,
  a,
  b as s,
  t as o,
  e as l,
  p as u,
  f as c,
  n as p,
  r as g,
  F as d,
  g as m,
  h,
  A as y,
  G as w,
  T as f,
  i as b,
  j as S,
  k,
  C as T,
  S as O,
  l as R,
  q as L,
  s as A,
  w as I,
  v,
  u as P,
  x,
  z as M,
  P as j,
  M as N,
  B,
  D as W
} from "./vendor-1f73cd9b.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const E = t({
    locale: "en-us",
    fallbackLocale: "en-us",
    warnHtmlInMessage: "on",
    messages: {
      "en-us": {
        FlewAway: "FLEW AWAY!",
        RoundHistory: "ROUND HISTORY",
        AllBets: "All Bets",
        MyBets: "My Bets",
        Top: "Top",
        PrevHand: "Previous Hand",
        User: "User",
        Bet: "Bet",
        Multiplier: "X",
        CashOut: "Cash Out",
        Auto: "Auto",
        Cancel: "Cancel",
        WinInfo: "You have cashed out!",
        Win: "Win",
        AutoCashOut: "Auto Cash Out",
        AutoPlay: "AUTO PLAY",
        Stop: "stop",
        Date: "Date",
        AutoPlayOptions: {
          Title: "Auto play options",
          NumberOfRounds: "Number of Rounds:",
          StopIfCashDecreasesBy: "Stop if cash decreases by",
          StopIfCashIncreasesBy: "Stop if cash increases by",
          StopIfSingleWinExceeds: "Stop if single win exceeds",
          Reset: "Reset",
          Start: "Start",
          ErrorSetNumberOfRounds: "Please, set number of rounds",
          ErrorStopPoint: "Please, specify decrease or exceed stop point",
          ErrorCanNotZero: "Can‘t set 0.00 as stop point"
        },
        Ranking: "Ranking",
        Rank: {
          HugeWins: "HUGE WINS",
          BiggestWins: "BIGGEST WINS",
          Multipliers: "MULTIPLIERS",
          Day: "Day",
          Week: "Week",
          Month: "Month",
          Year: "Year"
        },
        WeeklyAward: {
          Title: "Weekly Rewards",
          CurrentWeek: "Current Week",
          LastWeek: "Last Week",
          Rank: "Rank",
          Bonus: "Bonus",
          User: "User",
          Score: "Score",
          SettlementTime: "Settlement time: {time}",
          CurrentWeekInfo:
            'The more cash out points you accumulate before the settlement time expires, the higher your ranking will be. If you enter the top <span style="color: #4fef28;font-weight: bold">{numberOfRewards}</span>, you will get the corresponding ranking reward.',
          CurrentWeekYouTop:
            'Your current rank is <span style="color: #4fef28;font-weight: bold">{youTop}</span>, it has been included in the reward list and continues to maintain.',
          CurrentWeekYouNoTop:
            'Your current rank is <span style="color: #4fef28;font-weight: bold">{youTop}</span>, not on the reward list. Continue to work hard.',
          LastWeekInfo: "Last week's winners",
          LastWeekStatusNoReward:
            "Not in the Reward Ranking:<br>You are not in the list, keep up the good work.",
          LastWeekStatusPleaseClaim:
            'Entering the reward ranking has not been claimed:<br>Congratulations on your ranking <span style="color: #4fef28;font-weight: bold">{top}</span>, please claim the reward.',
          LastWeekStatusClaimed:
            'The entry reward ranking has been claimed:<br>Congratulations on your ranking <span style="color: #4fef28;font-weight: bold">{top}</span>, the reward has been claimed.',
          GetBonus: "Get Bonus"
        },
        Close: "Close",
        Connecting: "CONNECTING...",
        Settings: {
          Sound: "Sound",
          Animation: "Animation",
          GameRules: "Game Rules",
          Home: "Home"
        },
        GameRules: {
          Title: "GAME RULES",
          Intro:
            "AviatorPlus is a new generation of iGaming. The gameplay is very simple. You can win many times in a few seconds!",
          HowToPlay: "HOW TO PLAY?",
          Play1:
            '1. <span style="color: #ff0000;font-weight: bold">BET</span> before the plane take-off',
          Play2:
            '2. <span style="color: #ff0000;font-weight: bold">WATCH</span> During the flying phase of the plane, your reward increase',
          Play3:
            '3. <span style="color: #ff0000;font-weight: bold">CASH OUT</span> before the plane flies away and you will win X times the reward',
          Remember:
            "Remember, if you don't cash out before the plane flies away, your bet will be lost. Risk and Winnings are under your control!",
          GameLimits: "GAME LIMITS",
          MaxBet:
            'Maximum bet: <span style="color: #4fef28;font-weight: bold">{maxBet}</span>',
          MaxWin:
            'Maximum win for one bet: <span style="color: #4fef28;font-weight: bold">{maxWin}</span>'
        },
        MaxAnteLimit: "Exceeded Maximum Stake"
      }
    }
  }),
  D = 2e3,
  _ = 1e4,
  H = { EndRound: "end-round" };
function V(e) {
  let t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
    n = window.location.search.slice(1).match(t);
  return null != n ? decodeURIComponent(n[2]) : null;
}
function G(e, t, n) {
  let r = (e / n || 0).toFixed(t).split(".");
  return (r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), r.join(".");
}
const q = n.Reader,
  F = n.Writer,
  U = n.util,
  J = n.roots.default || (n.roots.default = {}),
  $ = (J.game = (() => {
    const e = {};
    return (
      (e.MsgType = (function () {
        const e = {},
          t = Object.create(e);
        return (
          (t[(e[0] = "Msg_Base")] = 0),
          (t[(e[1e3] = "Login_Request")] = 1e3),
          (t[(e[1001] = "Login_Response")] = 1001),
          (t[(e[1002] = "Ping")] = 1002),
          (t[(e[1003] = "Pong")] = 1003),
          (t[(e[1004] = "Jack_Pot_Pool_Request")] = 1004),
          (t[(e[1005] = "Jack_Pot_Pool_Response")] = 1005),
          (t[(e[1011] = "Jack_Pot_Award_Message_Response")] = 1011),
          (t[(e[1013] = "Tip_Message_Response")] = 1013),
          (t[(e[1014] = "Balance_Request")] = 1014),
          (t[(e[1015] = "Balance_Response")] = 1015),
          (t[(e[1016] = "Weekly_Top_Reward_Request")] = 1016),
          (t[(e[1017] = "Weekly_Top_Reward_Response")] = 1017),
          (t[(e[1019] = "Jack_Pot_Award_Response")] = 1019),
          (t[(e[1020] = "Rank_List_Request")] = 1020),
          (t[(e[1021] = "Rank_List_Response")] = 1021),
          (t[(e[1023] = "Logout_Response")] = 1023),
          (t[(e[1025] = "Personal_Loss_Limit_Response")] = 1025),
          (t[(e[1026] = "Group_Chip_In_Request")] = 1026),
          (t[(e[1027] = "Group_Chip_In_Response")] = 1027),
          (t[(e[1029] = "Group_Game_Status_Sync_Response")] = 1029),
          (t[(e[1030] = "Take_Weekly_Top_Reward_Request")] = 1030),
          (t[(e[1031] = "Take_Weekly_Top_Reward_Response")] = 1031),
          (t[(e[1033] = "Broadcast_Chip_In_Response")] = 1033),
          (t[(e[1034] = "Group_Cash_Out_Request")] = 1034),
          (t[(e[1035] = "Group_Cash_Out_Response")] = 1035),
          (t[(e[1037] = "Broadcast_Cash_Out_Response")] = 1037),
          (t[(e[1029] = "Broadcast_Flying_Multiplier_Response")] = 1019),
          (t[(e[1040] = "Broadcast_List_Request")] = 1040),
          (t[(e[1041] = "Broadcast_List_Response")] = 1041),
          (t[(e[1043] = "Broadcast_Response")] = 1043),
          t
        );
      })()),
      (e.LoginRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.uid = ""),
          (e.prototype.channel = ""),
          (e.prototype.token = ""),
          (e.prototype.currencyType = ""),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.uid &&
                Object.hasOwnProperty.call(e, "uid") &&
                t.uint32(10).string(e.uid),
              null != e.channel &&
                Object.hasOwnProperty.call(e, "channel") &&
                t.uint32(18).string(e.channel),
              null != e.token &&
                Object.hasOwnProperty.call(e, "token") &&
                t.uint32(26).string(e.token),
              null != e.currencyType &&
                Object.hasOwnProperty.call(e, "currencyType") &&
                t.uint32(34).string(e.currencyType),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.LoginRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.uid = e.string();
                  break;
                case 2:
                  r.channel = e.string();
                  break;
                case 3:
                  r.token = e.string();
                  break;
                case 4:
                  r.currencyType = e.string();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.uid && e.hasOwnProperty("uid") && !U.isString(e.uid)
              ? "uid: string expected"
              : null != e.channel &&
                e.hasOwnProperty("channel") &&
                !U.isString(e.channel)
              ? "channel: string expected"
              : null != e.token &&
                e.hasOwnProperty("token") &&
                !U.isString(e.token)
              ? "token: string expected"
              : null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                !U.isString(e.currencyType)
              ? "currencyType: string expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.LoginRequest) return e;
            let t = new J.game.LoginRequest();
            return (
              null != e.uid && (t.uid = String(e.uid)),
              null != e.channel && (t.channel = String(e.channel)),
              null != e.token && (t.token = String(e.token)),
              null != e.currencyType &&
                (t.currencyType = String(e.currencyType)),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults &&
                ((n.uid = ""),
                (n.channel = ""),
                (n.token = ""),
                (n.currencyType = "")),
              null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid),
              null != e.channel &&
                e.hasOwnProperty("channel") &&
                (n.channel = e.channel),
              null != e.token &&
                e.hasOwnProperty("token") &&
                (n.token = e.token),
              null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                (n.currencyType = e.currencyType),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.LoginResponse = (function () {
        function e(e) {
          if (
            ((this.currencyChipInSteps = []),
            (this.allChipInList = []),
            (this.multiplierHistories = []),
            e)
          )
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.uid = ""),
          (e.prototype.result = 0),
          (e.prototype.nickname = ""),
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.currencyType = ""),
          (e.prototype.currencyRate = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.currencyChipInSteps = U.emptyArray),
          (e.prototype.lobbyUrl = ""),
          (e.prototype.depositUrl = ""),
          (e.prototype.syncStatusResponse = null),
          (e.prototype.allChipInList = U.emptyArray),
          (e.prototype.maxAnteLimit = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.maxAwardLimit = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.multiplierHistories = U.emptyArray),
          (e.prototype.lastWeekStatus = 0),
          (e.prototype.newPlayer = !1),
          (e.prototype.weeklyTopEnable = U.Long
            ? U.Long.fromBits(0, 0, !1)
            : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            if (
              (t || (t = F.create()),
              null != e.uid &&
                Object.hasOwnProperty.call(e, "uid") &&
                t.uint32(10).string(e.uid),
              null != e.result &&
                Object.hasOwnProperty.call(e, "result") &&
                t.uint32(16).int32(e.result),
              null != e.nickname &&
                Object.hasOwnProperty.call(e, "nickname") &&
                t.uint32(26).string(e.nickname),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(32).int64(e.balance),
              null != e.currencyType &&
                Object.hasOwnProperty.call(e, "currencyType") &&
                t.uint32(42).string(e.currencyType),
              null != e.currencyRate &&
                Object.hasOwnProperty.call(e, "currencyRate") &&
                t.uint32(48).int64(e.currencyRate),
              null != e.currencyChipInSteps && e.currencyChipInSteps.length)
            ) {
              t.uint32(58).fork();
              for (let n = 0; n < e.currencyChipInSteps.length; ++n)
                t.int64(e.currencyChipInSteps[n]);
              t.ldelim();
            }
            if (
              (null != e.lobbyUrl &&
                Object.hasOwnProperty.call(e, "lobbyUrl") &&
                t.uint32(66).string(e.lobbyUrl),
              null != e.depositUrl &&
                Object.hasOwnProperty.call(e, "depositUrl") &&
                t.uint32(74).string(e.depositUrl),
              null != e.syncStatusResponse &&
                Object.hasOwnProperty.call(e, "syncStatusResponse") &&
                J.game.GroupStatusSyncResponse.encode(
                  e.syncStatusResponse,
                  t.uint32(82).fork()
                ).ldelim(),
              null != e.allChipInList && e.allChipInList.length)
            )
              for (let n = 0; n < e.allChipInList.length; ++n)
                J.game.ChipInResult.encode(
                  e.allChipInList[n],
                  t.uint32(90).fork()
                ).ldelim();
            if (
              (null != e.maxAnteLimit &&
                Object.hasOwnProperty.call(e, "maxAnteLimit") &&
                t.uint32(96).int64(e.maxAnteLimit),
              null != e.maxAwardLimit &&
                Object.hasOwnProperty.call(e, "maxAwardLimit") &&
                t.uint32(104).int64(e.maxAwardLimit),
              null != e.multiplierHistories && e.multiplierHistories.length)
            )
              for (let n = 0; n < e.multiplierHistories.length; ++n)
                J.game.MultiplierRecord.encode(
                  e.multiplierHistories[n],
                  t.uint32(114).fork()
                ).ldelim();
            return (
              null != e.lastWeekStatus &&
                Object.hasOwnProperty.call(e, "lastWeekStatus") &&
                t.uint32(120).int32(e.lastWeekStatus),
              null != e.newPlayer &&
                Object.hasOwnProperty.call(e, "newPlayer") &&
                t.uint32(128).bool(e.newPlayer),
              null != e.weeklyTopEnable &&
                Object.hasOwnProperty.call(e, "weeklyTopEnable") &&
                t.uint32(136).int64(e.weeklyTopEnable),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.LoginResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.uid = e.string();
                  break;
                case 2:
                  r.result = e.int32();
                  break;
                case 3:
                  r.nickname = e.string();
                  break;
                case 4:
                  r.balance = e.int64();
                  break;
                case 5:
                  r.currencyType = e.string();
                  break;
                case 6:
                  r.currencyRate = e.int64();
                  break;
                case 7:
                  if (
                    ((r.currencyChipInSteps && r.currencyChipInSteps.length) ||
                      (r.currencyChipInSteps = []),
                    2 == (7 & t))
                  ) {
                    let t = e.uint32() + e.pos;
                    for (; e.pos < t; ) r.currencyChipInSteps.push(e.int64());
                  } else r.currencyChipInSteps.push(e.int64());
                  break;
                case 8:
                  r.lobbyUrl = e.string();
                  break;
                case 9:
                  r.depositUrl = e.string();
                  break;
                case 10:
                  r.syncStatusResponse = J.game.GroupStatusSyncResponse.decode(
                    e,
                    e.uint32()
                  );
                  break;
                case 11:
                  (r.allChipInList && r.allChipInList.length) ||
                    (r.allChipInList = []),
                    r.allChipInList.push(
                      J.game.ChipInResult.decode(e, e.uint32())
                    );
                  break;
                case 12:
                  r.maxAnteLimit = e.int64();
                  break;
                case 13:
                  r.maxAwardLimit = e.int64();
                  break;
                case 14:
                  (r.multiplierHistories && r.multiplierHistories.length) ||
                    (r.multiplierHistories = []),
                    r.multiplierHistories.push(
                      J.game.MultiplierRecord.decode(e, e.uint32())
                    );
                  break;
                case 15:
                  r.lastWeekStatus = e.int32();
                  break;
                case 16:
                  r.newPlayer = e.bool();
                  break;
                case 17:
                  r.weeklyTopEnable = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.uid && e.hasOwnProperty("uid") && !U.isString(e.uid))
              return "uid: string expected";
            if (null != e.result && e.hasOwnProperty("result"))
              switch (e.result) {
                default:
                  return "result: enum value expected";
                case 0:
                case 1:
              }
            if (
              null != e.nickname &&
              e.hasOwnProperty("nickname") &&
              !U.isString(e.nickname)
            )
              return "nickname: string expected";
            if (
              null != e.balance &&
              e.hasOwnProperty("balance") &&
              !(
                U.isInteger(e.balance) ||
                (e.balance &&
                  U.isInteger(e.balance.low) &&
                  U.isInteger(e.balance.high))
              )
            )
              return "balance: integer|Long expected";
            if (
              null != e.currencyType &&
              e.hasOwnProperty("currencyType") &&
              !U.isString(e.currencyType)
            )
              return "currencyType: string expected";
            if (
              null != e.currencyRate &&
              e.hasOwnProperty("currencyRate") &&
              !(
                U.isInteger(e.currencyRate) ||
                (e.currencyRate &&
                  U.isInteger(e.currencyRate.low) &&
                  U.isInteger(e.currencyRate.high))
              )
            )
              return "currencyRate: integer|Long expected";
            if (
              null != e.currencyChipInSteps &&
              e.hasOwnProperty("currencyChipInSteps")
            ) {
              if (!Array.isArray(e.currencyChipInSteps))
                return "currencyChipInSteps: array expected";
              for (let t = 0; t < e.currencyChipInSteps.length; ++t)
                if (
                  !(
                    U.isInteger(e.currencyChipInSteps[t]) ||
                    (e.currencyChipInSteps[t] &&
                      U.isInteger(e.currencyChipInSteps[t].low) &&
                      U.isInteger(e.currencyChipInSteps[t].high))
                  )
                )
                  return "currencyChipInSteps: integer|Long[] expected";
            }
            if (
              null != e.lobbyUrl &&
              e.hasOwnProperty("lobbyUrl") &&
              !U.isString(e.lobbyUrl)
            )
              return "lobbyUrl: string expected";
            if (
              null != e.depositUrl &&
              e.hasOwnProperty("depositUrl") &&
              !U.isString(e.depositUrl)
            )
              return "depositUrl: string expected";
            if (
              null != e.syncStatusResponse &&
              e.hasOwnProperty("syncStatusResponse")
            ) {
              let t = J.game.GroupStatusSyncResponse.verify(
                e.syncStatusResponse
              );
              if (t) return "syncStatusResponse." + t;
            }
            if (null != e.allChipInList && e.hasOwnProperty("allChipInList")) {
              if (!Array.isArray(e.allChipInList))
                return "allChipInList: array expected";
              for (let t = 0; t < e.allChipInList.length; ++t) {
                let n = J.game.ChipInResult.verify(e.allChipInList[t]);
                if (n) return "allChipInList." + n;
              }
            }
            if (
              null != e.maxAnteLimit &&
              e.hasOwnProperty("maxAnteLimit") &&
              !(
                U.isInteger(e.maxAnteLimit) ||
                (e.maxAnteLimit &&
                  U.isInteger(e.maxAnteLimit.low) &&
                  U.isInteger(e.maxAnteLimit.high))
              )
            )
              return "maxAnteLimit: integer|Long expected";
            if (
              null != e.maxAwardLimit &&
              e.hasOwnProperty("maxAwardLimit") &&
              !(
                U.isInteger(e.maxAwardLimit) ||
                (e.maxAwardLimit &&
                  U.isInteger(e.maxAwardLimit.low) &&
                  U.isInteger(e.maxAwardLimit.high))
              )
            )
              return "maxAwardLimit: integer|Long expected";
            if (
              null != e.multiplierHistories &&
              e.hasOwnProperty("multiplierHistories")
            ) {
              if (!Array.isArray(e.multiplierHistories))
                return "multiplierHistories: array expected";
              for (let t = 0; t < e.multiplierHistories.length; ++t) {
                let n = J.game.MultiplierRecord.verify(
                  e.multiplierHistories[t]
                );
                if (n) return "multiplierHistories." + n;
              }
            }
            return null != e.lastWeekStatus &&
              e.hasOwnProperty("lastWeekStatus") &&
              !U.isInteger(e.lastWeekStatus)
              ? "lastWeekStatus: integer expected"
              : null != e.newPlayer &&
                e.hasOwnProperty("newPlayer") &&
                "boolean" != typeof e.newPlayer
              ? "newPlayer: boolean expected"
              : null != e.weeklyTopEnable &&
                e.hasOwnProperty("weeklyTopEnable") &&
                !(
                  U.isInteger(e.weeklyTopEnable) ||
                  (e.weeklyTopEnable &&
                    U.isInteger(e.weeklyTopEnable.low) &&
                    U.isInteger(e.weeklyTopEnable.high))
                )
              ? "weeklyTopEnable: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.LoginResponse) return e;
            let t = new J.game.LoginResponse();
            switch ((null != e.uid && (t.uid = String(e.uid)), e.result)) {
              case "SUCCESS":
              case 0:
                t.result = 0;
                break;
              case "FAIL":
              case 1:
                t.result = 1;
            }
            if (
              (null != e.nickname && (t.nickname = String(e.nickname)),
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              null != e.currencyType &&
                (t.currencyType = String(e.currencyType)),
              null != e.currencyRate &&
                (U.Long
                  ? ((t.currencyRate = U.Long.fromValue(
                      e.currencyRate
                    )).unsigned = !1)
                  : "string" == typeof e.currencyRate
                  ? (t.currencyRate = parseInt(e.currencyRate, 10))
                  : "number" == typeof e.currencyRate
                  ? (t.currencyRate = e.currencyRate)
                  : "object" == typeof e.currencyRate &&
                    (t.currencyRate = new U.LongBits(
                      e.currencyRate.low >>> 0,
                      e.currencyRate.high >>> 0
                    ).toNumber())),
              e.currencyChipInSteps)
            ) {
              if (!Array.isArray(e.currencyChipInSteps))
                throw TypeError(
                  ".game.LoginResponse.currencyChipInSteps: array expected"
                );
              t.currencyChipInSteps = [];
              for (let n = 0; n < e.currencyChipInSteps.length; ++n)
                U.Long
                  ? ((t.currencyChipInSteps[n] = U.Long.fromValue(
                      e.currencyChipInSteps[n]
                    )).unsigned = !1)
                  : "string" == typeof e.currencyChipInSteps[n]
                  ? (t.currencyChipInSteps[n] = parseInt(
                      e.currencyChipInSteps[n],
                      10
                    ))
                  : "number" == typeof e.currencyChipInSteps[n]
                  ? (t.currencyChipInSteps[n] = e.currencyChipInSteps[n])
                  : "object" == typeof e.currencyChipInSteps[n] &&
                    (t.currencyChipInSteps[n] = new U.LongBits(
                      e.currencyChipInSteps[n].low >>> 0,
                      e.currencyChipInSteps[n].high >>> 0
                    ).toNumber());
            }
            if (
              (null != e.lobbyUrl && (t.lobbyUrl = String(e.lobbyUrl)),
              null != e.depositUrl && (t.depositUrl = String(e.depositUrl)),
              null != e.syncStatusResponse)
            ) {
              if ("object" != typeof e.syncStatusResponse)
                throw TypeError(
                  ".game.LoginResponse.syncStatusResponse: object expected"
                );
              t.syncStatusResponse = J.game.GroupStatusSyncResponse.fromObject(
                e.syncStatusResponse
              );
            }
            if (e.allChipInList) {
              if (!Array.isArray(e.allChipInList))
                throw TypeError(
                  ".game.LoginResponse.allChipInList: array expected"
                );
              t.allChipInList = [];
              for (let n = 0; n < e.allChipInList.length; ++n) {
                if ("object" != typeof e.allChipInList[n])
                  throw TypeError(
                    ".game.LoginResponse.allChipInList: object expected"
                  );
                t.allChipInList[n] = J.game.ChipInResult.fromObject(
                  e.allChipInList[n]
                );
              }
            }
            if (
              (null != e.maxAnteLimit &&
                (U.Long
                  ? ((t.maxAnteLimit = U.Long.fromValue(
                      e.maxAnteLimit
                    )).unsigned = !1)
                  : "string" == typeof e.maxAnteLimit
                  ? (t.maxAnteLimit = parseInt(e.maxAnteLimit, 10))
                  : "number" == typeof e.maxAnteLimit
                  ? (t.maxAnteLimit = e.maxAnteLimit)
                  : "object" == typeof e.maxAnteLimit &&
                    (t.maxAnteLimit = new U.LongBits(
                      e.maxAnteLimit.low >>> 0,
                      e.maxAnteLimit.high >>> 0
                    ).toNumber())),
              null != e.maxAwardLimit &&
                (U.Long
                  ? ((t.maxAwardLimit = U.Long.fromValue(
                      e.maxAwardLimit
                    )).unsigned = !1)
                  : "string" == typeof e.maxAwardLimit
                  ? (t.maxAwardLimit = parseInt(e.maxAwardLimit, 10))
                  : "number" == typeof e.maxAwardLimit
                  ? (t.maxAwardLimit = e.maxAwardLimit)
                  : "object" == typeof e.maxAwardLimit &&
                    (t.maxAwardLimit = new U.LongBits(
                      e.maxAwardLimit.low >>> 0,
                      e.maxAwardLimit.high >>> 0
                    ).toNumber())),
              e.multiplierHistories)
            ) {
              if (!Array.isArray(e.multiplierHistories))
                throw TypeError(
                  ".game.LoginResponse.multiplierHistories: array expected"
                );
              t.multiplierHistories = [];
              for (let n = 0; n < e.multiplierHistories.length; ++n) {
                if ("object" != typeof e.multiplierHistories[n])
                  throw TypeError(
                    ".game.LoginResponse.multiplierHistories: object expected"
                  );
                t.multiplierHistories[n] = J.game.MultiplierRecord.fromObject(
                  e.multiplierHistories[n]
                );
              }
            }
            return (
              null != e.lastWeekStatus &&
                (t.lastWeekStatus = 0 | e.lastWeekStatus),
              null != e.newPlayer && (t.newPlayer = Boolean(e.newPlayer)),
              null != e.weeklyTopEnable &&
                (U.Long
                  ? ((t.weeklyTopEnable = U.Long.fromValue(
                      e.weeklyTopEnable
                    )).unsigned = !1)
                  : "string" == typeof e.weeklyTopEnable
                  ? (t.weeklyTopEnable = parseInt(e.weeklyTopEnable, 10))
                  : "number" == typeof e.weeklyTopEnable
                  ? (t.weeklyTopEnable = e.weeklyTopEnable)
                  : "object" == typeof e.weeklyTopEnable &&
                    (t.weeklyTopEnable = new U.LongBits(
                      e.weeklyTopEnable.low >>> 0,
                      e.weeklyTopEnable.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (
              ((t.arrays || t.defaults) &&
                ((n.currencyChipInSteps = []),
                (n.allChipInList = []),
                (n.multiplierHistories = [])),
              t.defaults)
            ) {
              if (
                ((n.uid = ""),
                (n.result = t.enums === String ? "SUCCESS" : 0),
                (n.nickname = ""),
                U.Long)
              ) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
              if (((n.currencyType = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.currencyRate =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.currencyRate = t.longs === String ? "0" : 0;
              if (
                ((n.lobbyUrl = ""),
                (n.depositUrl = ""),
                (n.syncStatusResponse = null),
                U.Long)
              ) {
                let e = new U.Long(0, 0, !1);
                n.maxAnteLimit =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.maxAnteLimit = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.maxAwardLimit =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.maxAwardLimit = t.longs === String ? "0" : 0;
              if (((n.lastWeekStatus = 0), (n.newPlayer = !1), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.weeklyTopEnable =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.weeklyTopEnable = t.longs === String ? "0" : 0;
            }
            if (
              (null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid),
              null != e.result &&
                e.hasOwnProperty("result") &&
                (n.result =
                  t.enums === String
                    ? J.game.LoginResponse.Result[e.result]
                    : e.result),
              null != e.nickname &&
                e.hasOwnProperty("nickname") &&
                (n.nickname = e.nickname),
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                (n.currencyType = e.currencyType),
              null != e.currencyRate &&
                e.hasOwnProperty("currencyRate") &&
                ("number" == typeof e.currencyRate
                  ? (n.currencyRate =
                      t.longs === String
                        ? String(e.currencyRate)
                        : e.currencyRate)
                  : (n.currencyRate =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.currencyRate)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.currencyRate.low >>> 0,
                            e.currencyRate.high >>> 0
                          ).toNumber()
                        : e.currencyRate)),
              e.currencyChipInSteps && e.currencyChipInSteps.length)
            ) {
              n.currencyChipInSteps = [];
              for (let r = 0; r < e.currencyChipInSteps.length; ++r)
                "number" == typeof e.currencyChipInSteps[r]
                  ? (n.currencyChipInSteps[r] =
                      t.longs === String
                        ? String(e.currencyChipInSteps[r])
                        : e.currencyChipInSteps[r])
                  : (n.currencyChipInSteps[r] =
                      t.longs === String
                        ? U.Long.prototype.toString.call(
                            e.currencyChipInSteps[r]
                          )
                        : t.longs === Number
                        ? new U.LongBits(
                            e.currencyChipInSteps[r].low >>> 0,
                            e.currencyChipInSteps[r].high >>> 0
                          ).toNumber()
                        : e.currencyChipInSteps[r]);
            }
            if (
              (null != e.lobbyUrl &&
                e.hasOwnProperty("lobbyUrl") &&
                (n.lobbyUrl = e.lobbyUrl),
              null != e.depositUrl &&
                e.hasOwnProperty("depositUrl") &&
                (n.depositUrl = e.depositUrl),
              null != e.syncStatusResponse &&
                e.hasOwnProperty("syncStatusResponse") &&
                (n.syncStatusResponse = J.game.GroupStatusSyncResponse.toObject(
                  e.syncStatusResponse,
                  t
                )),
              e.allChipInList && e.allChipInList.length)
            ) {
              n.allChipInList = [];
              for (let r = 0; r < e.allChipInList.length; ++r)
                n.allChipInList[r] = J.game.ChipInResult.toObject(
                  e.allChipInList[r],
                  t
                );
            }
            if (
              (null != e.maxAnteLimit &&
                e.hasOwnProperty("maxAnteLimit") &&
                ("number" == typeof e.maxAnteLimit
                  ? (n.maxAnteLimit =
                      t.longs === String
                        ? String(e.maxAnteLimit)
                        : e.maxAnteLimit)
                  : (n.maxAnteLimit =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.maxAnteLimit)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.maxAnteLimit.low >>> 0,
                            e.maxAnteLimit.high >>> 0
                          ).toNumber()
                        : e.maxAnteLimit)),
              null != e.maxAwardLimit &&
                e.hasOwnProperty("maxAwardLimit") &&
                ("number" == typeof e.maxAwardLimit
                  ? (n.maxAwardLimit =
                      t.longs === String
                        ? String(e.maxAwardLimit)
                        : e.maxAwardLimit)
                  : (n.maxAwardLimit =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.maxAwardLimit)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.maxAwardLimit.low >>> 0,
                            e.maxAwardLimit.high >>> 0
                          ).toNumber()
                        : e.maxAwardLimit)),
              e.multiplierHistories && e.multiplierHistories.length)
            ) {
              n.multiplierHistories = [];
              for (let r = 0; r < e.multiplierHistories.length; ++r)
                n.multiplierHistories[r] = J.game.MultiplierRecord.toObject(
                  e.multiplierHistories[r],
                  t
                );
            }
            return (
              null != e.lastWeekStatus &&
                e.hasOwnProperty("lastWeekStatus") &&
                (n.lastWeekStatus = e.lastWeekStatus),
              null != e.newPlayer &&
                e.hasOwnProperty("newPlayer") &&
                (n.newPlayer = e.newPlayer),
              null != e.weeklyTopEnable &&
                e.hasOwnProperty("weeklyTopEnable") &&
                ("number" == typeof e.weeklyTopEnable
                  ? (n.weeklyTopEnable =
                      t.longs === String
                        ? String(e.weeklyTopEnable)
                        : e.weeklyTopEnable)
                  : (n.weeklyTopEnable =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.weeklyTopEnable)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.weeklyTopEnable.low >>> 0,
                            e.weeklyTopEnable.high >>> 0
                          ).toNumber()
                        : e.weeklyTopEnable)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          (e.Result = (function () {
            const e = {},
              t = Object.create(e);
            return (t[(e[0] = "SUCCESS")] = 0), (t[(e[1] = "FAIL")] = 1), t;
          })()),
          e
        );
      })()),
      (e.MultiplierRecord = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.transactionId = ""),
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.transactionId &&
                Object.hasOwnProperty.call(e, "transactionId") &&
                t.uint32(10).string(e.transactionId),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(16).int64(e.multiplier),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.MultiplierRecord();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.transactionId = e.string();
                  break;
                case 2:
                  r.multiplier = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                !U.isString(e.transactionId)
              ? "transactionId: string expected"
              : null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                !(
                  U.isInteger(e.multiplier) ||
                  (e.multiplier &&
                    U.isInteger(e.multiplier.low) &&
                    U.isInteger(e.multiplier.high))
                )
              ? "multiplier: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.MultiplierRecord) return e;
            let t = new J.game.MultiplierRecord();
            return (
              null != e.transactionId &&
                (t.transactionId = String(e.transactionId)),
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults)
              if (((n.transactionId = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
            return (
              null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                (n.transactionId = e.transactionId),
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.PingRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.timestamp = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.timestamp &&
                Object.hasOwnProperty.call(e, "timestamp") &&
                t.uint32(8).int64(e.timestamp),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.PingRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.timestamp = e.int64();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.timestamp &&
                e.hasOwnProperty("timestamp") &&
                !(
                  U.isInteger(e.timestamp) ||
                  (e.timestamp &&
                    U.isInteger(e.timestamp.low) &&
                    U.isInteger(e.timestamp.high))
                )
              ? "timestamp: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.PingRequest) return e;
            let t = new J.game.PingRequest();
            return (
              null != e.timestamp &&
                (U.Long
                  ? ((t.timestamp = U.Long.fromValue(
                      e.timestamp
                    )).unsigned = !1)
                  : "string" == typeof e.timestamp
                  ? (t.timestamp = parseInt(e.timestamp, 10))
                  : "number" == typeof e.timestamp
                  ? (t.timestamp = e.timestamp)
                  : "object" == typeof e.timestamp &&
                    (t.timestamp = new U.LongBits(
                      e.timestamp.low >>> 0,
                      e.timestamp.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults)
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.timestamp =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.timestamp = t.longs === String ? "0" : 0;
            return (
              null != e.timestamp &&
                e.hasOwnProperty("timestamp") &&
                ("number" == typeof e.timestamp
                  ? (n.timestamp =
                      t.longs === String ? String(e.timestamp) : e.timestamp)
                  : (n.timestamp =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.timestamp)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.timestamp.low >>> 0,
                            e.timestamp.high >>> 0
                          ).toNumber()
                        : e.timestamp)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.PongResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.timestamp = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.timestamp &&
                Object.hasOwnProperty.call(e, "timestamp") &&
                t.uint32(8).int64(e.timestamp),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.PongResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.timestamp = e.int64();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.timestamp &&
                e.hasOwnProperty("timestamp") &&
                !(
                  U.isInteger(e.timestamp) ||
                  (e.timestamp &&
                    U.isInteger(e.timestamp.low) &&
                    U.isInteger(e.timestamp.high))
                )
              ? "timestamp: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.PongResponse) return e;
            let t = new J.game.PongResponse();
            return (
              null != e.timestamp &&
                (U.Long
                  ? ((t.timestamp = U.Long.fromValue(
                      e.timestamp
                    )).unsigned = !1)
                  : "string" == typeof e.timestamp
                  ? (t.timestamp = parseInt(e.timestamp, 10))
                  : "number" == typeof e.timestamp
                  ? (t.timestamp = e.timestamp)
                  : "object" == typeof e.timestamp &&
                    (t.timestamp = new U.LongBits(
                      e.timestamp.low >>> 0,
                      e.timestamp.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults)
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.timestamp =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.timestamp = t.longs === String ? "0" : 0;
            return (
              null != e.timestamp &&
                e.hasOwnProperty("timestamp") &&
                ("number" == typeof e.timestamp
                  ? (n.timestamp =
                      t.longs === String ? String(e.timestamp) : e.timestamp)
                  : (n.timestamp =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.timestamp)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.timestamp.low >>> 0,
                            e.timestamp.high >>> 0
                          ).toNumber()
                        : e.timestamp)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.ChipInItem = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.site = 0),
          (e.prototype.ante = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.site &&
                Object.hasOwnProperty.call(e, "site") &&
                t.uint32(8).int32(e.site),
              null != e.ante &&
                Object.hasOwnProperty.call(e, "ante") &&
                t.uint32(16).int64(e.ante),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.ChipInItem();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.site = e.int32();
                  break;
                case 2:
                  r.ante = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.site &&
                e.hasOwnProperty("site") &&
                !U.isInteger(e.site)
              ? "site: integer expected"
              : null != e.ante &&
                e.hasOwnProperty("ante") &&
                !(
                  U.isInteger(e.ante) ||
                  (e.ante &&
                    U.isInteger(e.ante.low) &&
                    U.isInteger(e.ante.high))
                )
              ? "ante: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.ChipInItem) return e;
            let t = new J.game.ChipInItem();
            return (
              null != e.site && (t.site = 0 | e.site),
              null != e.ante &&
                (U.Long
                  ? ((t.ante = U.Long.fromValue(e.ante)).unsigned = !1)
                  : "string" == typeof e.ante
                  ? (t.ante = parseInt(e.ante, 10))
                  : "number" == typeof e.ante
                  ? (t.ante = e.ante)
                  : "object" == typeof e.ante &&
                    (t.ante = new U.LongBits(
                      e.ante.low >>> 0,
                      e.ante.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults)
              if (((n.site = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.ante =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.ante = t.longs === String ? "0" : 0;
            return (
              null != e.site && e.hasOwnProperty("site") && (n.site = e.site),
              null != e.ante &&
                e.hasOwnProperty("ante") &&
                ("number" == typeof e.ante
                  ? (n.ante = t.longs === String ? String(e.ante) : e.ante)
                  : (n.ante =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.ante)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.ante.low >>> 0,
                            e.ante.high >>> 0
                          ).toNumber()
                        : e.ante)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.ChipInResult = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.site = 0),
          (e.prototype.ante = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.award = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.uid = ""),
          (e.prototype.nickName = ""),
          (e.prototype.status = 0),
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.site &&
                Object.hasOwnProperty.call(e, "site") &&
                t.uint32(8).int32(e.site),
              null != e.ante &&
                Object.hasOwnProperty.call(e, "ante") &&
                t.uint32(16).int64(e.ante),
              null != e.award &&
                Object.hasOwnProperty.call(e, "award") &&
                t.uint32(24).int64(e.award),
              null != e.uid &&
                Object.hasOwnProperty.call(e, "uid") &&
                t.uint32(34).string(e.uid),
              null != e.nickName &&
                Object.hasOwnProperty.call(e, "nickName") &&
                t.uint32(42).string(e.nickName),
              null != e.status &&
                Object.hasOwnProperty.call(e, "status") &&
                t.uint32(48).int32(e.status),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(56).int64(e.multiplier),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.ChipInResult();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.site = e.int32();
                  break;
                case 2:
                  r.ante = e.int64();
                  break;
                case 3:
                  r.award = e.int64();
                  break;
                case 4:
                  r.uid = e.string();
                  break;
                case 5:
                  r.nickName = e.string();
                  break;
                case 6:
                  r.status = e.int32();
                  break;
                case 7:
                  r.multiplier = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.site &&
                e.hasOwnProperty("site") &&
                !U.isInteger(e.site)
              ? "site: integer expected"
              : null != e.ante &&
                e.hasOwnProperty("ante") &&
                !(
                  U.isInteger(e.ante) ||
                  (e.ante &&
                    U.isInteger(e.ante.low) &&
                    U.isInteger(e.ante.high))
                )
              ? "ante: integer|Long expected"
              : null != e.award &&
                e.hasOwnProperty("award") &&
                !(
                  U.isInteger(e.award) ||
                  (e.award &&
                    U.isInteger(e.award.low) &&
                    U.isInteger(e.award.high))
                )
              ? "award: integer|Long expected"
              : null != e.uid && e.hasOwnProperty("uid") && !U.isString(e.uid)
              ? "uid: string expected"
              : null != e.nickName &&
                e.hasOwnProperty("nickName") &&
                !U.isString(e.nickName)
              ? "nickName: string expected"
              : null != e.status &&
                e.hasOwnProperty("status") &&
                !U.isInteger(e.status)
              ? "status: integer expected"
              : null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                !(
                  U.isInteger(e.multiplier) ||
                  (e.multiplier &&
                    U.isInteger(e.multiplier.low) &&
                    U.isInteger(e.multiplier.high))
                )
              ? "multiplier: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.ChipInResult) return e;
            let t = new J.game.ChipInResult();
            return (
              null != e.site && (t.site = 0 | e.site),
              null != e.ante &&
                (U.Long
                  ? ((t.ante = U.Long.fromValue(e.ante)).unsigned = !1)
                  : "string" == typeof e.ante
                  ? (t.ante = parseInt(e.ante, 10))
                  : "number" == typeof e.ante
                  ? (t.ante = e.ante)
                  : "object" == typeof e.ante &&
                    (t.ante = new U.LongBits(
                      e.ante.low >>> 0,
                      e.ante.high >>> 0
                    ).toNumber())),
              null != e.award &&
                (U.Long
                  ? ((t.award = U.Long.fromValue(e.award)).unsigned = !1)
                  : "string" == typeof e.award
                  ? (t.award = parseInt(e.award, 10))
                  : "number" == typeof e.award
                  ? (t.award = e.award)
                  : "object" == typeof e.award &&
                    (t.award = new U.LongBits(
                      e.award.low >>> 0,
                      e.award.high >>> 0
                    ).toNumber())),
              null != e.uid && (t.uid = String(e.uid)),
              null != e.nickName && (t.nickName = String(e.nickName)),
              null != e.status && (t.status = 0 | e.status),
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.site = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.ante =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.ante = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.award =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.award = t.longs === String ? "0" : 0;
              if (((n.uid = ""), (n.nickName = ""), (n.status = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
            }
            return (
              null != e.site && e.hasOwnProperty("site") && (n.site = e.site),
              null != e.ante &&
                e.hasOwnProperty("ante") &&
                ("number" == typeof e.ante
                  ? (n.ante = t.longs === String ? String(e.ante) : e.ante)
                  : (n.ante =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.ante)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.ante.low >>> 0,
                            e.ante.high >>> 0
                          ).toNumber()
                        : e.ante)),
              null != e.award &&
                e.hasOwnProperty("award") &&
                ("number" == typeof e.award
                  ? (n.award = t.longs === String ? String(e.award) : e.award)
                  : (n.award =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.award)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.award.low >>> 0,
                            e.award.high >>> 0
                          ).toNumber()
                        : e.award)),
              null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid),
              null != e.nickName &&
                e.hasOwnProperty("nickName") &&
                (n.nickName = e.nickName),
              null != e.status &&
                e.hasOwnProperty("status") &&
                (n.status = e.status),
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.GroupChipInRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.ante = null),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.ante &&
                Object.hasOwnProperty.call(e, "ante") &&
                J.game.ChipInItem.encode(e.ante, t.uint32(10).fork()).ldelim(),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.GroupChipInRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1)
                r.ante = J.game.ChipInItem.decode(e, e.uint32());
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.ante && e.hasOwnProperty("ante")) {
              let t = J.game.ChipInItem.verify(e.ante);
              if (t) return "ante." + t;
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.GroupChipInRequest) return e;
            let t = new J.game.GroupChipInRequest();
            if (null != e.ante) {
              if ("object" != typeof e.ante)
                throw TypeError(
                  ".game.GroupChipInRequest.ante: object expected"
                );
              t.ante = J.game.ChipInItem.fromObject(e.ante);
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && (n.ante = null),
              null != e.ante &&
                e.hasOwnProperty("ante") &&
                (n.ante = J.game.ChipInItem.toObject(e.ante, t)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.GroupChipInResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.transactionId = ""),
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.result = !1),
          (e.prototype.site = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.transactionId &&
                Object.hasOwnProperty.call(e, "transactionId") &&
                t.uint32(10).string(e.transactionId),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(16).int64(e.balance),
              null != e.result &&
                Object.hasOwnProperty.call(e, "result") &&
                t.uint32(24).bool(e.result),
              null != e.site &&
                Object.hasOwnProperty.call(e, "site") &&
                t.uint32(32).int32(e.site),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.GroupChipInResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.transactionId = e.string();
                  break;
                case 2:
                  r.balance = e.int64();
                  break;
                case 3:
                  r.result = e.bool();
                  break;
                case 4:
                  r.site = e.int32();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                !U.isString(e.transactionId)
              ? "transactionId: string expected"
              : null != e.balance &&
                e.hasOwnProperty("balance") &&
                !(
                  U.isInteger(e.balance) ||
                  (e.balance &&
                    U.isInteger(e.balance.low) &&
                    U.isInteger(e.balance.high))
                )
              ? "balance: integer|Long expected"
              : null != e.result &&
                e.hasOwnProperty("result") &&
                "boolean" != typeof e.result
              ? "result: boolean expected"
              : null != e.site &&
                e.hasOwnProperty("site") &&
                !U.isInteger(e.site)
              ? "site: integer expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.GroupChipInResponse) return e;
            let t = new J.game.GroupChipInResponse();
            return (
              null != e.transactionId &&
                (t.transactionId = String(e.transactionId)),
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              null != e.result && (t.result = Boolean(e.result)),
              null != e.site && (t.site = 0 | e.site),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.transactionId = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
              (n.result = !1), (n.site = 0);
            }
            return (
              null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                (n.transactionId = e.transactionId),
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              null != e.result &&
                e.hasOwnProperty("result") &&
                (n.result = e.result),
              null != e.site && e.hasOwnProperty("site") && (n.site = e.site),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.GroupStatusSyncResponse = (function () {
        function e(e) {
          if (((this.awardRank = []), e))
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.transactionId = ""),
          (e.prototype.groupStatus = ""),
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.remainingTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.awardRank = U.emptyArray),
          (e.prototype.totalTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            if (
              (t || (t = F.create()),
              null != e.transactionId &&
                Object.hasOwnProperty.call(e, "transactionId") &&
                t.uint32(10).string(e.transactionId),
              null != e.groupStatus &&
                Object.hasOwnProperty.call(e, "groupStatus") &&
                t.uint32(18).string(e.groupStatus),
              null != e.remainingTime &&
                Object.hasOwnProperty.call(e, "remainingTime") &&
                t.uint32(32).int64(e.remainingTime),
              null != e.awardRank && e.awardRank.length)
            )
              for (let n = 0; n < e.awardRank.length; ++n)
                J.game.Rank.encode(
                  e.awardRank[n],
                  t.uint32(42).fork()
                ).ldelim();
            return (
              null != e.totalTime &&
                Object.hasOwnProperty.call(e, "totalTime") &&
                t.uint32(48).int64(e.totalTime),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(56).int64(e.multiplier),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.GroupStatusSyncResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.transactionId = e.string();
                  break;
                case 2:
                  r.groupStatus = e.string();
                  break;
                case 7:
                  r.multiplier = e.int64();
                  break;
                case 4:
                  r.remainingTime = e.int64();
                  break;
                case 5:
                  (r.awardRank && r.awardRank.length) || (r.awardRank = []),
                    r.awardRank.push(J.game.Rank.decode(e, e.uint32()));
                  break;
                case 6:
                  r.totalTime = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (
              null != e.transactionId &&
              e.hasOwnProperty("transactionId") &&
              !U.isString(e.transactionId)
            )
              return "transactionId: string expected";
            if (
              null != e.groupStatus &&
              e.hasOwnProperty("groupStatus") &&
              !U.isString(e.groupStatus)
            )
              return "groupStatus: string expected";
            if (
              null != e.multiplier &&
              e.hasOwnProperty("multiplier") &&
              !(
                U.isInteger(e.multiplier) ||
                (e.multiplier &&
                  U.isInteger(e.multiplier.low) &&
                  U.isInteger(e.multiplier.high))
              )
            )
              return "multiplier: integer|Long expected";
            if (
              null != e.remainingTime &&
              e.hasOwnProperty("remainingTime") &&
              !(
                U.isInteger(e.remainingTime) ||
                (e.remainingTime &&
                  U.isInteger(e.remainingTime.low) &&
                  U.isInteger(e.remainingTime.high))
              )
            )
              return "remainingTime: integer|Long expected";
            if (null != e.awardRank && e.hasOwnProperty("awardRank")) {
              if (!Array.isArray(e.awardRank))
                return "awardRank: array expected";
              for (let t = 0; t < e.awardRank.length; ++t) {
                let n = J.game.Rank.verify(e.awardRank[t]);
                if (n) return "awardRank." + n;
              }
            }
            return null != e.totalTime &&
              e.hasOwnProperty("totalTime") &&
              !(
                U.isInteger(e.totalTime) ||
                (e.totalTime &&
                  U.isInteger(e.totalTime.low) &&
                  U.isInteger(e.totalTime.high))
              )
              ? "totalTime: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.GroupStatusSyncResponse) return e;
            let t = new J.game.GroupStatusSyncResponse();
            if (
              (null != e.transactionId &&
                (t.transactionId = String(e.transactionId)),
              null != e.groupStatus && (t.groupStatus = String(e.groupStatus)),
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              null != e.remainingTime &&
                (U.Long
                  ? ((t.remainingTime = U.Long.fromValue(
                      e.remainingTime
                    )).unsigned = !1)
                  : "string" == typeof e.remainingTime
                  ? (t.remainingTime = parseInt(e.remainingTime, 10))
                  : "number" == typeof e.remainingTime
                  ? (t.remainingTime = e.remainingTime)
                  : "object" == typeof e.remainingTime &&
                    (t.remainingTime = new U.LongBits(
                      e.remainingTime.low >>> 0,
                      e.remainingTime.high >>> 0
                    ).toNumber())),
              e.awardRank)
            ) {
              if (!Array.isArray(e.awardRank))
                throw TypeError(
                  ".game.GroupStatusSyncResponse.awardRank: array expected"
                );
              t.awardRank = [];
              for (let n = 0; n < e.awardRank.length; ++n) {
                if ("object" != typeof e.awardRank[n])
                  throw TypeError(
                    ".game.GroupStatusSyncResponse.awardRank: object expected"
                  );
                t.awardRank[n] = J.game.Rank.fromObject(e.awardRank[n]);
              }
            }
            return (
              null != e.totalTime &&
                (U.Long
                  ? ((t.totalTime = U.Long.fromValue(
                      e.totalTime
                    )).unsigned = !1)
                  : "string" == typeof e.totalTime
                  ? (t.totalTime = parseInt(e.totalTime, 10))
                  : "number" == typeof e.totalTime
                  ? (t.totalTime = e.totalTime)
                  : "object" == typeof e.totalTime &&
                    (t.totalTime = new U.LongBits(
                      e.totalTime.low >>> 0,
                      e.totalTime.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (((t.arrays || t.defaults) && (n.awardRank = []), t.defaults)) {
              if (((n.transactionId = ""), (n.groupStatus = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.remainingTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.remainingTime = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.totalTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.totalTime = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
            }
            if (
              (null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                (n.transactionId = e.transactionId),
              null != e.groupStatus &&
                e.hasOwnProperty("groupStatus") &&
                (n.groupStatus = e.groupStatus),
              null != e.remainingTime &&
                e.hasOwnProperty("remainingTime") &&
                ("number" == typeof e.remainingTime
                  ? (n.remainingTime =
                      t.longs === String
                        ? String(e.remainingTime)
                        : e.remainingTime)
                  : (n.remainingTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.remainingTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.remainingTime.low >>> 0,
                            e.remainingTime.high >>> 0
                          ).toNumber()
                        : e.remainingTime)),
              e.awardRank && e.awardRank.length)
            ) {
              n.awardRank = [];
              for (let r = 0; r < e.awardRank.length; ++r)
                n.awardRank[r] = J.game.Rank.toObject(e.awardRank[r], t);
            }
            return (
              null != e.totalTime &&
                e.hasOwnProperty("totalTime") &&
                ("number" == typeof e.totalTime
                  ? (n.totalTime =
                      t.longs === String ? String(e.totalTime) : e.totalTime)
                  : (n.totalTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.totalTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.totalTime.low >>> 0,
                            e.totalTime.high >>> 0
                          ).toNumber()
                        : e.totalTime)),
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.TipMessageResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.msgType = 0),
          (e.prototype.txtMsg = ""),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.msgType &&
                Object.hasOwnProperty.call(e, "msgType") &&
                t.uint32(8).int32(e.msgType),
              null != e.txtMsg &&
                Object.hasOwnProperty.call(e, "txtMsg") &&
                t.uint32(18).string(e.txtMsg),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.TipMessageResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.msgType = e.int32();
                  break;
                case 2:
                  r.txtMsg = e.string();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.msgType &&
                e.hasOwnProperty("msgType") &&
                !U.isInteger(e.msgType)
              ? "msgType: integer expected"
              : null != e.txtMsg &&
                e.hasOwnProperty("txtMsg") &&
                !U.isString(e.txtMsg)
              ? "txtMsg: string expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.TipMessageResponse) return e;
            let t = new J.game.TipMessageResponse();
            return (
              null != e.msgType && (t.msgType = 0 | e.msgType),
              null != e.txtMsg && (t.txtMsg = String(e.txtMsg)),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && ((n.msgType = 0), (n.txtMsg = "")),
              null != e.msgType &&
                e.hasOwnProperty("msgType") &&
                (n.msgType = e.msgType),
              null != e.txtMsg &&
                e.hasOwnProperty("txtMsg") &&
                (n.txtMsg = e.txtMsg),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.JackPotAwardMessageResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.nickName = ""),
          (e.prototype.awardType = 0),
          (e.prototype.awardMoney = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.awardTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.currencyType = ""),
          (e.prototype.currencyRate = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.nickName &&
                Object.hasOwnProperty.call(e, "nickName") &&
                t.uint32(10).string(e.nickName),
              null != e.awardType &&
                Object.hasOwnProperty.call(e, "awardType") &&
                t.uint32(16).int32(e.awardType),
              null != e.awardMoney &&
                Object.hasOwnProperty.call(e, "awardMoney") &&
                t.uint32(24).int64(e.awardMoney),
              null != e.awardTime &&
                Object.hasOwnProperty.call(e, "awardTime") &&
                t.uint32(32).int64(e.awardTime),
              null != e.currencyType &&
                Object.hasOwnProperty.call(e, "currencyType") &&
                t.uint32(42).string(e.currencyType),
              null != e.currencyRate &&
                Object.hasOwnProperty.call(e, "currencyRate") &&
                t.uint32(48).int64(e.currencyRate),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.JackPotAwardMessageResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.nickName = e.string();
                  break;
                case 2:
                  r.awardType = e.int32();
                  break;
                case 3:
                  r.awardMoney = e.int64();
                  break;
                case 4:
                  r.awardTime = e.int64();
                  break;
                case 5:
                  r.currencyType = e.string();
                  break;
                case 6:
                  r.currencyRate = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.nickName &&
                e.hasOwnProperty("nickName") &&
                !U.isString(e.nickName)
              ? "nickName: string expected"
              : null != e.awardType &&
                e.hasOwnProperty("awardType") &&
                !U.isInteger(e.awardType)
              ? "awardType: integer expected"
              : null != e.awardMoney &&
                e.hasOwnProperty("awardMoney") &&
                !(
                  U.isInteger(e.awardMoney) ||
                  (e.awardMoney &&
                    U.isInteger(e.awardMoney.low) &&
                    U.isInteger(e.awardMoney.high))
                )
              ? "awardMoney: integer|Long expected"
              : null != e.awardTime &&
                e.hasOwnProperty("awardTime") &&
                !(
                  U.isInteger(e.awardTime) ||
                  (e.awardTime &&
                    U.isInteger(e.awardTime.low) &&
                    U.isInteger(e.awardTime.high))
                )
              ? "awardTime: integer|Long expected"
              : null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                !U.isString(e.currencyType)
              ? "currencyType: string expected"
              : null != e.currencyRate &&
                e.hasOwnProperty("currencyRate") &&
                !(
                  U.isInteger(e.currencyRate) ||
                  (e.currencyRate &&
                    U.isInteger(e.currencyRate.low) &&
                    U.isInteger(e.currencyRate.high))
                )
              ? "currencyRate: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.JackPotAwardMessageResponse) return e;
            let t = new J.game.JackPotAwardMessageResponse();
            return (
              null != e.nickName && (t.nickName = String(e.nickName)),
              null != e.awardType && (t.awardType = 0 | e.awardType),
              null != e.awardMoney &&
                (U.Long
                  ? ((t.awardMoney = U.Long.fromValue(
                      e.awardMoney
                    )).unsigned = !1)
                  : "string" == typeof e.awardMoney
                  ? (t.awardMoney = parseInt(e.awardMoney, 10))
                  : "number" == typeof e.awardMoney
                  ? (t.awardMoney = e.awardMoney)
                  : "object" == typeof e.awardMoney &&
                    (t.awardMoney = new U.LongBits(
                      e.awardMoney.low >>> 0,
                      e.awardMoney.high >>> 0
                    ).toNumber())),
              null != e.awardTime &&
                (U.Long
                  ? ((t.awardTime = U.Long.fromValue(
                      e.awardTime
                    )).unsigned = !1)
                  : "string" == typeof e.awardTime
                  ? (t.awardTime = parseInt(e.awardTime, 10))
                  : "number" == typeof e.awardTime
                  ? (t.awardTime = e.awardTime)
                  : "object" == typeof e.awardTime &&
                    (t.awardTime = new U.LongBits(
                      e.awardTime.low >>> 0,
                      e.awardTime.high >>> 0
                    ).toNumber())),
              null != e.currencyType &&
                (t.currencyType = String(e.currencyType)),
              null != e.currencyRate &&
                (U.Long
                  ? ((t.currencyRate = U.Long.fromValue(
                      e.currencyRate
                    )).unsigned = !1)
                  : "string" == typeof e.currencyRate
                  ? (t.currencyRate = parseInt(e.currencyRate, 10))
                  : "number" == typeof e.currencyRate
                  ? (t.currencyRate = e.currencyRate)
                  : "object" == typeof e.currencyRate &&
                    (t.currencyRate = new U.LongBits(
                      e.currencyRate.low >>> 0,
                      e.currencyRate.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.nickName = ""), (n.awardType = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.awardMoney =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.awardMoney = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.awardTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.awardTime = t.longs === String ? "0" : 0;
              if (((n.currencyType = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.currencyRate =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.currencyRate = t.longs === String ? "0" : 0;
            }
            return (
              null != e.nickName &&
                e.hasOwnProperty("nickName") &&
                (n.nickName = e.nickName),
              null != e.awardType &&
                e.hasOwnProperty("awardType") &&
                (n.awardType = e.awardType),
              null != e.awardMoney &&
                e.hasOwnProperty("awardMoney") &&
                ("number" == typeof e.awardMoney
                  ? (n.awardMoney =
                      t.longs === String ? String(e.awardMoney) : e.awardMoney)
                  : (n.awardMoney =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.awardMoney)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.awardMoney.low >>> 0,
                            e.awardMoney.high >>> 0
                          ).toNumber()
                        : e.awardMoney)),
              null != e.awardTime &&
                e.hasOwnProperty("awardTime") &&
                ("number" == typeof e.awardTime
                  ? (n.awardTime =
                      t.longs === String ? String(e.awardTime) : e.awardTime)
                  : (n.awardTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.awardTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.awardTime.low >>> 0,
                            e.awardTime.high >>> 0
                          ).toNumber()
                        : e.awardTime)),
              null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                (n.currencyType = e.currencyType),
              null != e.currencyRate &&
                e.hasOwnProperty("currencyRate") &&
                ("number" == typeof e.currencyRate
                  ? (n.currencyRate =
                      t.longs === String
                        ? String(e.currencyRate)
                        : e.currencyRate)
                  : (n.currencyRate =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.currencyRate)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.currencyRate.low >>> 0,
                            e.currencyRate.high >>> 0
                          ).toNumber()
                        : e.currencyRate)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.JackPotAwardResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.awardType = 0),
          (e.prototype.awardMoney = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.awardType &&
                Object.hasOwnProperty.call(e, "awardType") &&
                t.uint32(8).int32(e.awardType),
              null != e.awardMoney &&
                Object.hasOwnProperty.call(e, "awardMoney") &&
                t.uint32(16).int64(e.awardMoney),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(24).int64(e.balance),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.JackPotAwardResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.awardType = e.int32();
                  break;
                case 2:
                  r.awardMoney = e.int64();
                  break;
                case 3:
                  r.balance = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.awardType &&
                e.hasOwnProperty("awardType") &&
                !U.isInteger(e.awardType)
              ? "awardType: integer expected"
              : null != e.awardMoney &&
                e.hasOwnProperty("awardMoney") &&
                !(
                  U.isInteger(e.awardMoney) ||
                  (e.awardMoney &&
                    U.isInteger(e.awardMoney.low) &&
                    U.isInteger(e.awardMoney.high))
                )
              ? "awardMoney: integer|Long expected"
              : null != e.balance &&
                e.hasOwnProperty("balance") &&
                !(
                  U.isInteger(e.balance) ||
                  (e.balance &&
                    U.isInteger(e.balance.low) &&
                    U.isInteger(e.balance.high))
                )
              ? "balance: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.JackPotAwardResponse) return e;
            let t = new J.game.JackPotAwardResponse();
            return (
              null != e.awardType && (t.awardType = 0 | e.awardType),
              null != e.awardMoney &&
                (U.Long
                  ? ((t.awardMoney = U.Long.fromValue(
                      e.awardMoney
                    )).unsigned = !1)
                  : "string" == typeof e.awardMoney
                  ? (t.awardMoney = parseInt(e.awardMoney, 10))
                  : "number" == typeof e.awardMoney
                  ? (t.awardMoney = e.awardMoney)
                  : "object" == typeof e.awardMoney &&
                    (t.awardMoney = new U.LongBits(
                      e.awardMoney.low >>> 0,
                      e.awardMoney.high >>> 0
                    ).toNumber())),
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.awardType = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.awardMoney =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.awardMoney = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
            }
            return (
              null != e.awardType &&
                e.hasOwnProperty("awardType") &&
                (n.awardType = e.awardType),
              null != e.awardMoney &&
                e.hasOwnProperty("awardMoney") &&
                ("number" == typeof e.awardMoney
                  ? (n.awardMoney =
                      t.longs === String ? String(e.awardMoney) : e.awardMoney)
                  : (n.awardMoney =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.awardMoney)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.awardMoney.low >>> 0,
                            e.awardMoney.high >>> 0
                          ).toNumber()
                        : e.awardMoney)),
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.JackPotPoolRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return t || (t = F.create()), t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.JackPotPoolRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null;
          }),
          (e.fromObject = function (e) {
            return e instanceof J.game.JackPotPoolRequest
              ? e
              : new J.game.JackPotPoolRequest();
          }),
          (e.toObject = function () {
            return {};
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.JackPotPoolResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.miniAward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.megaAward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.superAward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.grandAward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.miniAward &&
                Object.hasOwnProperty.call(e, "miniAward") &&
                t.uint32(8).int64(e.miniAward),
              null != e.megaAward &&
                Object.hasOwnProperty.call(e, "megaAward") &&
                t.uint32(16).int64(e.megaAward),
              null != e.superAward &&
                Object.hasOwnProperty.call(e, "superAward") &&
                t.uint32(24).int64(e.superAward),
              null != e.grandAward &&
                Object.hasOwnProperty.call(e, "grandAward") &&
                t.uint32(32).int64(e.grandAward),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.JackPotPoolResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.miniAward = e.int64();
                  break;
                case 2:
                  r.megaAward = e.int64();
                  break;
                case 3:
                  r.superAward = e.int64();
                  break;
                case 4:
                  r.grandAward = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.miniAward &&
                e.hasOwnProperty("miniAward") &&
                !(
                  U.isInteger(e.miniAward) ||
                  (e.miniAward &&
                    U.isInteger(e.miniAward.low) &&
                    U.isInteger(e.miniAward.high))
                )
              ? "miniAward: integer|Long expected"
              : null != e.megaAward &&
                e.hasOwnProperty("megaAward") &&
                !(
                  U.isInteger(e.megaAward) ||
                  (e.megaAward &&
                    U.isInteger(e.megaAward.low) &&
                    U.isInteger(e.megaAward.high))
                )
              ? "megaAward: integer|Long expected"
              : null != e.superAward &&
                e.hasOwnProperty("superAward") &&
                !(
                  U.isInteger(e.superAward) ||
                  (e.superAward &&
                    U.isInteger(e.superAward.low) &&
                    U.isInteger(e.superAward.high))
                )
              ? "superAward: integer|Long expected"
              : null != e.grandAward &&
                e.hasOwnProperty("grandAward") &&
                !(
                  U.isInteger(e.grandAward) ||
                  (e.grandAward &&
                    U.isInteger(e.grandAward.low) &&
                    U.isInteger(e.grandAward.high))
                )
              ? "grandAward: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.JackPotPoolResponse) return e;
            let t = new J.game.JackPotPoolResponse();
            return (
              null != e.miniAward &&
                (U.Long
                  ? ((t.miniAward = U.Long.fromValue(
                      e.miniAward
                    )).unsigned = !1)
                  : "string" == typeof e.miniAward
                  ? (t.miniAward = parseInt(e.miniAward, 10))
                  : "number" == typeof e.miniAward
                  ? (t.miniAward = e.miniAward)
                  : "object" == typeof e.miniAward &&
                    (t.miniAward = new U.LongBits(
                      e.miniAward.low >>> 0,
                      e.miniAward.high >>> 0
                    ).toNumber())),
              null != e.megaAward &&
                (U.Long
                  ? ((t.megaAward = U.Long.fromValue(
                      e.megaAward
                    )).unsigned = !1)
                  : "string" == typeof e.megaAward
                  ? (t.megaAward = parseInt(e.megaAward, 10))
                  : "number" == typeof e.megaAward
                  ? (t.megaAward = e.megaAward)
                  : "object" == typeof e.megaAward &&
                    (t.megaAward = new U.LongBits(
                      e.megaAward.low >>> 0,
                      e.megaAward.high >>> 0
                    ).toNumber())),
              null != e.superAward &&
                (U.Long
                  ? ((t.superAward = U.Long.fromValue(
                      e.superAward
                    )).unsigned = !1)
                  : "string" == typeof e.superAward
                  ? (t.superAward = parseInt(e.superAward, 10))
                  : "number" == typeof e.superAward
                  ? (t.superAward = e.superAward)
                  : "object" == typeof e.superAward &&
                    (t.superAward = new U.LongBits(
                      e.superAward.low >>> 0,
                      e.superAward.high >>> 0
                    ).toNumber())),
              null != e.grandAward &&
                (U.Long
                  ? ((t.grandAward = U.Long.fromValue(
                      e.grandAward
                    )).unsigned = !1)
                  : "string" == typeof e.grandAward
                  ? (t.grandAward = parseInt(e.grandAward, 10))
                  : "number" == typeof e.grandAward
                  ? (t.grandAward = e.grandAward)
                  : "object" == typeof e.grandAward &&
                    (t.grandAward = new U.LongBits(
                      e.grandAward.low >>> 0,
                      e.grandAward.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.miniAward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.miniAward = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.megaAward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.megaAward = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.superAward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.superAward = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.grandAward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.grandAward = t.longs === String ? "0" : 0;
            }
            return (
              null != e.miniAward &&
                e.hasOwnProperty("miniAward") &&
                ("number" == typeof e.miniAward
                  ? (n.miniAward =
                      t.longs === String ? String(e.miniAward) : e.miniAward)
                  : (n.miniAward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.miniAward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.miniAward.low >>> 0,
                            e.miniAward.high >>> 0
                          ).toNumber()
                        : e.miniAward)),
              null != e.megaAward &&
                e.hasOwnProperty("megaAward") &&
                ("number" == typeof e.megaAward
                  ? (n.megaAward =
                      t.longs === String ? String(e.megaAward) : e.megaAward)
                  : (n.megaAward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.megaAward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.megaAward.low >>> 0,
                            e.megaAward.high >>> 0
                          ).toNumber()
                        : e.megaAward)),
              null != e.superAward &&
                e.hasOwnProperty("superAward") &&
                ("number" == typeof e.superAward
                  ? (n.superAward =
                      t.longs === String ? String(e.superAward) : e.superAward)
                  : (n.superAward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.superAward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.superAward.low >>> 0,
                            e.superAward.high >>> 0
                          ).toNumber()
                        : e.superAward)),
              null != e.grandAward &&
                e.hasOwnProperty("grandAward") &&
                ("number" == typeof e.grandAward
                  ? (n.grandAward =
                      t.longs === String ? String(e.grandAward) : e.grandAward)
                  : (n.grandAward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.grandAward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.grandAward.low >>> 0,
                            e.grandAward.high >>> 0
                          ).toNumber()
                        : e.grandAward)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BalanceRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return t || (t = F.create()), t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BalanceRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null;
          }),
          (e.fromObject = function (e) {
            return e instanceof J.game.BalanceRequest
              ? e
              : new J.game.BalanceRequest();
          }),
          (e.toObject = function () {
            return {};
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BalanceResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(8).int64(e.balance),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BalanceResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.balance = e.int64();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.balance &&
                e.hasOwnProperty("balance") &&
                !(
                  U.isInteger(e.balance) ||
                  (e.balance &&
                    U.isInteger(e.balance.low) &&
                    U.isInteger(e.balance.high))
                )
              ? "balance: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BalanceResponse) return e;
            let t = new J.game.BalanceResponse();
            return (
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults)
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
            return (
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.WeeklyTopRewardRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return t || (t = F.create()), t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.WeeklyTopRewardRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null;
          }),
          (e.fromObject = function (e) {
            return e instanceof J.game.WeeklyTopRewardRequest
              ? e
              : new J.game.WeeklyTopRewardRequest();
          }),
          (e.toObject = function () {
            return {};
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.WeeklyTop = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.top = 0),
          (e.prototype.uid = ""),
          (e.prototype.nickname = ""),
          (e.prototype.score = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.reward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.top &&
                Object.hasOwnProperty.call(e, "top") &&
                t.uint32(8).int32(e.top),
              null != e.uid &&
                Object.hasOwnProperty.call(e, "uid") &&
                t.uint32(18).string(e.uid),
              null != e.nickname &&
                Object.hasOwnProperty.call(e, "nickname") &&
                t.uint32(26).string(e.nickname),
              null != e.score &&
                Object.hasOwnProperty.call(e, "score") &&
                t.uint32(32).int64(e.score),
              null != e.reward &&
                Object.hasOwnProperty.call(e, "reward") &&
                t.uint32(40).int64(e.reward),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.WeeklyTop();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.top = e.int32();
                  break;
                case 2:
                  r.uid = e.string();
                  break;
                case 3:
                  r.nickname = e.string();
                  break;
                case 4:
                  r.score = e.int64();
                  break;
                case 5:
                  r.reward = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.top && e.hasOwnProperty("top") && !U.isInteger(e.top)
              ? "top: integer expected"
              : null != e.uid && e.hasOwnProperty("uid") && !U.isString(e.uid)
              ? "uid: string expected"
              : null != e.nickname &&
                e.hasOwnProperty("nickname") &&
                !U.isString(e.nickname)
              ? "nickname: string expected"
              : null != e.score &&
                e.hasOwnProperty("score") &&
                !(
                  U.isInteger(e.score) ||
                  (e.score &&
                    U.isInteger(e.score.low) &&
                    U.isInteger(e.score.high))
                )
              ? "score: integer|Long expected"
              : null != e.reward &&
                e.hasOwnProperty("reward") &&
                !(
                  U.isInteger(e.reward) ||
                  (e.reward &&
                    U.isInteger(e.reward.low) &&
                    U.isInteger(e.reward.high))
                )
              ? "reward: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.WeeklyTop) return e;
            let t = new J.game.WeeklyTop();
            return (
              null != e.top && (t.top = 0 | e.top),
              null != e.uid && (t.uid = String(e.uid)),
              null != e.nickname && (t.nickname = String(e.nickname)),
              null != e.score &&
                (U.Long
                  ? ((t.score = U.Long.fromValue(e.score)).unsigned = !1)
                  : "string" == typeof e.score
                  ? (t.score = parseInt(e.score, 10))
                  : "number" == typeof e.score
                  ? (t.score = e.score)
                  : "object" == typeof e.score &&
                    (t.score = new U.LongBits(
                      e.score.low >>> 0,
                      e.score.high >>> 0
                    ).toNumber())),
              null != e.reward &&
                (U.Long
                  ? ((t.reward = U.Long.fromValue(e.reward)).unsigned = !1)
                  : "string" == typeof e.reward
                  ? (t.reward = parseInt(e.reward, 10))
                  : "number" == typeof e.reward
                  ? (t.reward = e.reward)
                  : "object" == typeof e.reward &&
                    (t.reward = new U.LongBits(
                      e.reward.low >>> 0,
                      e.reward.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.top = 0), (n.uid = ""), (n.nickname = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.score =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.score = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.reward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.reward = t.longs === String ? "0" : 0;
            }
            return (
              null != e.top && e.hasOwnProperty("top") && (n.top = e.top),
              null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid),
              null != e.nickname &&
                e.hasOwnProperty("nickname") &&
                (n.nickname = e.nickname),
              null != e.score &&
                e.hasOwnProperty("score") &&
                ("number" == typeof e.score
                  ? (n.score = t.longs === String ? String(e.score) : e.score)
                  : (n.score =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.score)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.score.low >>> 0,
                            e.score.high >>> 0
                          ).toNumber()
                        : e.score)),
              null != e.reward &&
                e.hasOwnProperty("reward") &&
                ("number" == typeof e.reward
                  ? (n.reward =
                      t.longs === String ? String(e.reward) : e.reward)
                  : (n.reward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.reward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.reward.low >>> 0,
                            e.reward.high >>> 0
                          ).toNumber()
                        : e.reward)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.WeeklyTopRewardResponse = (function () {
        function e(e) {
          if (((this.currentWeek = []), (this.lastWeek = []), e))
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.currentWeek = U.emptyArray),
          (e.prototype.lastWeek = U.emptyArray),
          (e.prototype.lastWeekStatus = 0),
          (e.prototype.timestamp = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.currentWeekOneSelf = null),
          (e.prototype.numberOfRewards = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            if (
              (t || (t = F.create()),
              null != e.currentWeek && e.currentWeek.length)
            )
              for (let n = 0; n < e.currentWeek.length; ++n)
                J.game.WeeklyTop.encode(
                  e.currentWeek[n],
                  t.uint32(10).fork()
                ).ldelim();
            if (null != e.lastWeek && e.lastWeek.length)
              for (let n = 0; n < e.lastWeek.length; ++n)
                J.game.WeeklyTop.encode(
                  e.lastWeek[n],
                  t.uint32(18).fork()
                ).ldelim();
            return (
              null != e.lastWeekStatus &&
                Object.hasOwnProperty.call(e, "lastWeekStatus") &&
                t.uint32(24).int32(e.lastWeekStatus),
              null != e.timestamp &&
                Object.hasOwnProperty.call(e, "timestamp") &&
                t.uint32(32).int64(e.timestamp),
              null != e.currentWeekOneSelf &&
                Object.hasOwnProperty.call(e, "currentWeekOneSelf") &&
                J.game.WeeklyTop.encode(
                  e.currentWeekOneSelf,
                  t.uint32(42).fork()
                ).ldelim(),
              null != e.numberOfRewards &&
                Object.hasOwnProperty.call(e, "numberOfRewards") &&
                t.uint32(48).int32(e.numberOfRewards),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.WeeklyTopRewardResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  (r.currentWeek && r.currentWeek.length) ||
                    (r.currentWeek = []),
                    r.currentWeek.push(J.game.WeeklyTop.decode(e, e.uint32()));
                  break;
                case 2:
                  (r.lastWeek && r.lastWeek.length) || (r.lastWeek = []),
                    r.lastWeek.push(J.game.WeeklyTop.decode(e, e.uint32()));
                  break;
                case 3:
                  r.lastWeekStatus = e.int32();
                  break;
                case 4:
                  r.timestamp = e.int64();
                  break;
                case 5:
                  r.currentWeekOneSelf = J.game.WeeklyTop.decode(e, e.uint32());
                  break;
                case 6:
                  r.numberOfRewards = e.int32();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.currentWeek && e.hasOwnProperty("currentWeek")) {
              if (!Array.isArray(e.currentWeek))
                return "currentWeek: array expected";
              for (let t = 0; t < e.currentWeek.length; ++t) {
                let n = J.game.WeeklyTop.verify(e.currentWeek[t]);
                if (n) return "currentWeek." + n;
              }
            }
            if (null != e.lastWeek && e.hasOwnProperty("lastWeek")) {
              if (!Array.isArray(e.lastWeek)) return "lastWeek: array expected";
              for (let t = 0; t < e.lastWeek.length; ++t) {
                let n = J.game.WeeklyTop.verify(e.lastWeek[t]);
                if (n) return "lastWeek." + n;
              }
            }
            if (
              null != e.lastWeekStatus &&
              e.hasOwnProperty("lastWeekStatus") &&
              !U.isInteger(e.lastWeekStatus)
            )
              return "lastWeekStatus: integer expected";
            if (
              null != e.timestamp &&
              e.hasOwnProperty("timestamp") &&
              !(
                U.isInteger(e.timestamp) ||
                (e.timestamp &&
                  U.isInteger(e.timestamp.low) &&
                  U.isInteger(e.timestamp.high))
              )
            )
              return "timestamp: integer|Long expected";
            if (
              null != e.currentWeekOneSelf &&
              e.hasOwnProperty("currentWeekOneSelf")
            ) {
              let t = J.game.WeeklyTop.verify(e.currentWeekOneSelf);
              if (t) return "currentWeekOneSelf." + t;
            }
            return null != e.numberOfRewards &&
              e.hasOwnProperty("numberOfRewards") &&
              !U.isInteger(e.numberOfRewards)
              ? "numberOfRewards: integer expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.WeeklyTopRewardResponse) return e;
            let t = new J.game.WeeklyTopRewardResponse();
            if (e.currentWeek) {
              if (!Array.isArray(e.currentWeek))
                throw TypeError(
                  ".game.WeeklyTopRewardResponse.currentWeek: array expected"
                );
              t.currentWeek = [];
              for (let n = 0; n < e.currentWeek.length; ++n) {
                if ("object" != typeof e.currentWeek[n])
                  throw TypeError(
                    ".game.WeeklyTopRewardResponse.currentWeek: object expected"
                  );
                t.currentWeek[n] = J.game.WeeklyTop.fromObject(
                  e.currentWeek[n]
                );
              }
            }
            if (e.lastWeek) {
              if (!Array.isArray(e.lastWeek))
                throw TypeError(
                  ".game.WeeklyTopRewardResponse.lastWeek: array expected"
                );
              t.lastWeek = [];
              for (let n = 0; n < e.lastWeek.length; ++n) {
                if ("object" != typeof e.lastWeek[n])
                  throw TypeError(
                    ".game.WeeklyTopRewardResponse.lastWeek: object expected"
                  );
                t.lastWeek[n] = J.game.WeeklyTop.fromObject(e.lastWeek[n]);
              }
            }
            if (
              (null != e.lastWeekStatus &&
                (t.lastWeekStatus = 0 | e.lastWeekStatus),
              null != e.timestamp &&
                (U.Long
                  ? ((t.timestamp = U.Long.fromValue(
                      e.timestamp
                    )).unsigned = !1)
                  : "string" == typeof e.timestamp
                  ? (t.timestamp = parseInt(e.timestamp, 10))
                  : "number" == typeof e.timestamp
                  ? (t.timestamp = e.timestamp)
                  : "object" == typeof e.timestamp &&
                    (t.timestamp = new U.LongBits(
                      e.timestamp.low >>> 0,
                      e.timestamp.high >>> 0
                    ).toNumber())),
              null != e.currentWeekOneSelf)
            ) {
              if ("object" != typeof e.currentWeekOneSelf)
                throw TypeError(
                  ".game.WeeklyTopRewardResponse.currentWeekOneSelf: object expected"
                );
              t.currentWeekOneSelf = J.game.WeeklyTop.fromObject(
                e.currentWeekOneSelf
              );
            }
            return (
              null != e.numberOfRewards &&
                (t.numberOfRewards = 0 | e.numberOfRewards),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (
              ((t.arrays || t.defaults) &&
                ((n.currentWeek = []), (n.lastWeek = [])),
              t.defaults)
            ) {
              if (((n.lastWeekStatus = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.timestamp =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.timestamp = t.longs === String ? "0" : 0;
              (n.currentWeekOneSelf = null), (n.numberOfRewards = 0);
            }
            if (e.currentWeek && e.currentWeek.length) {
              n.currentWeek = [];
              for (let r = 0; r < e.currentWeek.length; ++r)
                n.currentWeek[r] = J.game.WeeklyTop.toObject(
                  e.currentWeek[r],
                  t
                );
            }
            if (e.lastWeek && e.lastWeek.length) {
              n.lastWeek = [];
              for (let r = 0; r < e.lastWeek.length; ++r)
                n.lastWeek[r] = J.game.WeeklyTop.toObject(e.lastWeek[r], t);
            }
            return (
              null != e.lastWeekStatus &&
                e.hasOwnProperty("lastWeekStatus") &&
                (n.lastWeekStatus = e.lastWeekStatus),
              null != e.timestamp &&
                e.hasOwnProperty("timestamp") &&
                ("number" == typeof e.timestamp
                  ? (n.timestamp =
                      t.longs === String ? String(e.timestamp) : e.timestamp)
                  : (n.timestamp =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.timestamp)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.timestamp.low >>> 0,
                            e.timestamp.high >>> 0
                          ).toNumber()
                        : e.timestamp)),
              null != e.currentWeekOneSelf &&
                e.hasOwnProperty("currentWeekOneSelf") &&
                (n.currentWeekOneSelf = J.game.WeeklyTop.toObject(
                  e.currentWeekOneSelf,
                  t
                )),
              null != e.numberOfRewards &&
                e.hasOwnProperty("numberOfRewards") &&
                (n.numberOfRewards = e.numberOfRewards),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.TakeWeeklyTopRewardRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return t || (t = F.create()), t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.TakeWeeklyTopRewardRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null;
          }),
          (e.fromObject = function (e) {
            return e instanceof J.game.TakeWeeklyTopRewardRequest
              ? e
              : new J.game.TakeWeeklyTopRewardRequest();
          }),
          (e.toObject = function () {
            return {};
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.TakeWeeklyTopRewardResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.result = 0),
          (e.prototype.reward = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.result &&
                Object.hasOwnProperty.call(e, "result") &&
                t.uint32(8).int32(e.result),
              null != e.reward &&
                Object.hasOwnProperty.call(e, "reward") &&
                t.uint32(16).int64(e.reward),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(24).int64(e.balance),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.TakeWeeklyTopRewardResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.result = e.int32();
                  break;
                case 2:
                  r.reward = e.int64();
                  break;
                case 3:
                  r.balance = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.result &&
                e.hasOwnProperty("result") &&
                !U.isInteger(e.result)
              ? "result: integer expected"
              : null != e.reward &&
                e.hasOwnProperty("reward") &&
                !(
                  U.isInteger(e.reward) ||
                  (e.reward &&
                    U.isInteger(e.reward.low) &&
                    U.isInteger(e.reward.high))
                )
              ? "reward: integer|Long expected"
              : null != e.balance &&
                e.hasOwnProperty("balance") &&
                !(
                  U.isInteger(e.balance) ||
                  (e.balance &&
                    U.isInteger(e.balance.low) &&
                    U.isInteger(e.balance.high))
                )
              ? "balance: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.TakeWeeklyTopRewardResponse) return e;
            let t = new J.game.TakeWeeklyTopRewardResponse();
            return (
              null != e.result && (t.result = 0 | e.result),
              null != e.reward &&
                (U.Long
                  ? ((t.reward = U.Long.fromValue(e.reward)).unsigned = !1)
                  : "string" == typeof e.reward
                  ? (t.reward = parseInt(e.reward, 10))
                  : "number" == typeof e.reward
                  ? (t.reward = e.reward)
                  : "object" == typeof e.reward &&
                    (t.reward = new U.LongBits(
                      e.reward.low >>> 0,
                      e.reward.high >>> 0
                    ).toNumber())),
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.result = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.reward =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.reward = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
            }
            return (
              null != e.result &&
                e.hasOwnProperty("result") &&
                (n.result = e.result),
              null != e.reward &&
                e.hasOwnProperty("reward") &&
                ("number" == typeof e.reward
                  ? (n.reward =
                      t.longs === String ? String(e.reward) : e.reward)
                  : (n.reward =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.reward)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.reward.low >>> 0,
                            e.reward.high >>> 0
                          ).toNumber()
                        : e.reward)),
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.RankListRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.rankType = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.rankType &&
                Object.hasOwnProperty.call(e, "rankType") &&
                t.uint32(8).int32(e.rankType),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.RankListRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.rankType = e.int32();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.rankType && e.hasOwnProperty("rankType"))
              switch (e.rankType) {
                default:
                  return "rankType: enum value expected";
                case 0:
                case 1:
                case 2:
              }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.RankListRequest) return e;
            let t = new J.game.RankListRequest();
            switch (e.rankType) {
              case "RankTypeMultiplier":
              case 0:
                t.rankType = 0;
                break;
              case "RankTypeCashOutMultiplier":
              case 1:
                t.rankType = 1;
                break;
              case "RankTypeCashOutPoint":
              case 2:
                t.rankType = 2;
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults &&
                (n.rankType = t.enums === String ? "RankTypeMultiplier" : 0),
              null != e.rankType &&
                e.hasOwnProperty("rankType") &&
                (n.rankType =
                  t.enums === String
                    ? J.game.RankListRequest.RankType[e.rankType]
                    : e.rankType),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          (e.RankType = (function () {
            const e = {},
              t = Object.create(e);
            return (
              (t[(e[0] = "RankTypeMultiplier")] = 0),
              (t[(e[1] = "RankTypeCashOutMultiplier")] = 1),
              (t[(e[2] = "RankTypeCashOutPoint")] = 2),
              t
            );
          })()),
          e
        );
      })()),
      (e.Rank = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.rank = 0),
          (e.prototype.nickname = ""),
          (e.prototype.score = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.uid = ""),
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.rank &&
                Object.hasOwnProperty.call(e, "rank") &&
                t.uint32(8).int32(e.rank),
              null != e.nickname &&
                Object.hasOwnProperty.call(e, "nickname") &&
                t.uint32(18).string(e.nickname),
              null != e.score &&
                Object.hasOwnProperty.call(e, "score") &&
                t.uint32(24).int64(e.score),
              null != e.uid &&
                Object.hasOwnProperty.call(e, "uid") &&
                t.uint32(34).string(e.uid),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(40).int64(e.multiplier),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.Rank();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.rank = e.int32();
                  break;
                case 2:
                  r.nickname = e.string();
                  break;
                case 3:
                  r.score = e.int64();
                  break;
                case 4:
                  r.uid = e.string();
                  break;
                case 5:
                  r.multiplier = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.rank &&
                e.hasOwnProperty("rank") &&
                !U.isInteger(e.rank)
              ? "rank: integer expected"
              : null != e.nickname &&
                e.hasOwnProperty("nickname") &&
                !U.isString(e.nickname)
              ? "nickname: string expected"
              : null != e.score &&
                e.hasOwnProperty("score") &&
                !(
                  U.isInteger(e.score) ||
                  (e.score &&
                    U.isInteger(e.score.low) &&
                    U.isInteger(e.score.high))
                )
              ? "score: integer|Long expected"
              : null != e.uid && e.hasOwnProperty("uid") && !U.isString(e.uid)
              ? "uid: string expected"
              : null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                !(
                  U.isInteger(e.multiplier) ||
                  (e.multiplier &&
                    U.isInteger(e.multiplier.low) &&
                    U.isInteger(e.multiplier.high))
                )
              ? "multiplier: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.Rank) return e;
            let t = new J.game.Rank();
            return (
              null != e.rank && (t.rank = 0 | e.rank),
              null != e.nickname && (t.nickname = String(e.nickname)),
              null != e.score &&
                (U.Long
                  ? ((t.score = U.Long.fromValue(e.score)).unsigned = !1)
                  : "string" == typeof e.score
                  ? (t.score = parseInt(e.score, 10))
                  : "number" == typeof e.score
                  ? (t.score = e.score)
                  : "object" == typeof e.score &&
                    (t.score = new U.LongBits(
                      e.score.low >>> 0,
                      e.score.high >>> 0
                    ).toNumber())),
              null != e.uid && (t.uid = String(e.uid)),
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.rank = 0), (n.nickname = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.score =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.score = t.longs === String ? "0" : 0;
              if (((n.uid = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
            }
            return (
              null != e.rank && e.hasOwnProperty("rank") && (n.rank = e.rank),
              null != e.nickname &&
                e.hasOwnProperty("nickname") &&
                (n.nickname = e.nickname),
              null != e.score &&
                e.hasOwnProperty("score") &&
                ("number" == typeof e.score
                  ? (n.score = t.longs === String ? String(e.score) : e.score)
                  : (n.score =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.score)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.score.low >>> 0,
                            e.score.high >>> 0
                          ).toNumber()
                        : e.score)),
              null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid),
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.RankListResponse = (function () {
        function e(e) {
          if (
            ((this.daily = []),
            (this.weekly = []),
            (this.monthly = []),
            (this.yearly = []),
            e)
          )
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.daily = U.emptyArray),
          (e.prototype.weekly = U.emptyArray),
          (e.prototype.monthly = U.emptyArray),
          (e.prototype.yearly = U.emptyArray),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            if ((t || (t = F.create()), null != e.daily && e.daily.length))
              for (let n = 0; n < e.daily.length; ++n)
                J.game.Rank.encode(e.daily[n], t.uint32(10).fork()).ldelim();
            if (null != e.weekly && e.weekly.length)
              for (let n = 0; n < e.weekly.length; ++n)
                J.game.Rank.encode(e.weekly[n], t.uint32(18).fork()).ldelim();
            if (null != e.monthly && e.monthly.length)
              for (let n = 0; n < e.monthly.length; ++n)
                J.game.Rank.encode(e.monthly[n], t.uint32(26).fork()).ldelim();
            if (null != e.yearly && e.yearly.length)
              for (let n = 0; n < e.yearly.length; ++n)
                J.game.Rank.encode(e.yearly[n], t.uint32(34).fork()).ldelim();
            return t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.RankListResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  (r.daily && r.daily.length) || (r.daily = []),
                    r.daily.push(J.game.Rank.decode(e, e.uint32()));
                  break;
                case 2:
                  (r.weekly && r.weekly.length) || (r.weekly = []),
                    r.weekly.push(J.game.Rank.decode(e, e.uint32()));
                  break;
                case 3:
                  (r.monthly && r.monthly.length) || (r.monthly = []),
                    r.monthly.push(J.game.Rank.decode(e, e.uint32()));
                  break;
                case 4:
                  (r.yearly && r.yearly.length) || (r.yearly = []),
                    r.yearly.push(J.game.Rank.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.daily && e.hasOwnProperty("daily")) {
              if (!Array.isArray(e.daily)) return "daily: array expected";
              for (let t = 0; t < e.daily.length; ++t) {
                let n = J.game.Rank.verify(e.daily[t]);
                if (n) return "daily." + n;
              }
            }
            if (null != e.weekly && e.hasOwnProperty("weekly")) {
              if (!Array.isArray(e.weekly)) return "weekly: array expected";
              for (let t = 0; t < e.weekly.length; ++t) {
                let n = J.game.Rank.verify(e.weekly[t]);
                if (n) return "weekly." + n;
              }
            }
            if (null != e.monthly && e.hasOwnProperty("monthly")) {
              if (!Array.isArray(e.monthly)) return "monthly: array expected";
              for (let t = 0; t < e.monthly.length; ++t) {
                let n = J.game.Rank.verify(e.monthly[t]);
                if (n) return "monthly." + n;
              }
            }
            if (null != e.yearly && e.hasOwnProperty("yearly")) {
              if (!Array.isArray(e.yearly)) return "yearly: array expected";
              for (let t = 0; t < e.yearly.length; ++t) {
                let n = J.game.Rank.verify(e.yearly[t]);
                if (n) return "yearly." + n;
              }
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.RankListResponse) return e;
            let t = new J.game.RankListResponse();
            if (e.daily) {
              if (!Array.isArray(e.daily))
                throw TypeError(".game.RankListResponse.daily: array expected");
              t.daily = [];
              for (let n = 0; n < e.daily.length; ++n) {
                if ("object" != typeof e.daily[n])
                  throw TypeError(
                    ".game.RankListResponse.daily: object expected"
                  );
                t.daily[n] = J.game.Rank.fromObject(e.daily[n]);
              }
            }
            if (e.weekly) {
              if (!Array.isArray(e.weekly))
                throw TypeError(
                  ".game.RankListResponse.weekly: array expected"
                );
              t.weekly = [];
              for (let n = 0; n < e.weekly.length; ++n) {
                if ("object" != typeof e.weekly[n])
                  throw TypeError(
                    ".game.RankListResponse.weekly: object expected"
                  );
                t.weekly[n] = J.game.Rank.fromObject(e.weekly[n]);
              }
            }
            if (e.monthly) {
              if (!Array.isArray(e.monthly))
                throw TypeError(
                  ".game.RankListResponse.monthly: array expected"
                );
              t.monthly = [];
              for (let n = 0; n < e.monthly.length; ++n) {
                if ("object" != typeof e.monthly[n])
                  throw TypeError(
                    ".game.RankListResponse.monthly: object expected"
                  );
                t.monthly[n] = J.game.Rank.fromObject(e.monthly[n]);
              }
            }
            if (e.yearly) {
              if (!Array.isArray(e.yearly))
                throw TypeError(
                  ".game.RankListResponse.yearly: array expected"
                );
              t.yearly = [];
              for (let n = 0; n < e.yearly.length; ++n) {
                if ("object" != typeof e.yearly[n])
                  throw TypeError(
                    ".game.RankListResponse.yearly: object expected"
                  );
                t.yearly[n] = J.game.Rank.fromObject(e.yearly[n]);
              }
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (
              ((t.arrays || t.defaults) &&
                ((n.daily = []),
                (n.weekly = []),
                (n.monthly = []),
                (n.yearly = [])),
              e.daily && e.daily.length)
            ) {
              n.daily = [];
              for (let r = 0; r < e.daily.length; ++r)
                n.daily[r] = J.game.Rank.toObject(e.daily[r], t);
            }
            if (e.weekly && e.weekly.length) {
              n.weekly = [];
              for (let r = 0; r < e.weekly.length; ++r)
                n.weekly[r] = J.game.Rank.toObject(e.weekly[r], t);
            }
            if (e.monthly && e.monthly.length) {
              n.monthly = [];
              for (let r = 0; r < e.monthly.length; ++r)
                n.monthly[r] = J.game.Rank.toObject(e.monthly[r], t);
            }
            if (e.yearly && e.yearly.length) {
              n.yearly = [];
              for (let r = 0; r < e.yearly.length; ++r)
                n.yearly[r] = J.game.Rank.toObject(e.yearly[r], t);
            }
            return n;
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.LogoutResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.type = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.type &&
                Object.hasOwnProperty.call(e, "type") &&
                t.uint32(8).int32(e.type),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.LogoutResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.type = e.int32();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.type && e.hasOwnProperty("type") && 0 !== e.type
              ? "type: enum value expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.LogoutResponse) return e;
            let t = new J.game.LogoutResponse();
            switch (e.type) {
              case "NEW_CONNECT_KICK_OUT":
              case 0:
                t.type = 0;
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults &&
                (n.type = t.enums === String ? "NEW_CONNECT_KICK_OUT" : 0),
              null != e.type &&
                e.hasOwnProperty("type") &&
                (n.type =
                  t.enums === String
                    ? J.game.LogoutResponse.LOGOUT_TYPE_ENUM[e.type]
                    : e.type),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          (e.LOGOUT_TYPE_ENUM = (function () {
            const e = {},
              t = Object.create(e);
            return (t[(e[0] = "NEW_CONNECT_KICK_OUT")] = 0), t;
          })()),
          e
        );
      })()),
      (e.PersonalLossLimitResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.limitType = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.limitType &&
                Object.hasOwnProperty.call(e, "limitType") &&
                t.uint32(8).int32(e.limitType),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.PersonalLossLimitResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1) r.limitType = e.int32();
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.limitType &&
                e.hasOwnProperty("limitType") &&
                !U.isInteger(e.limitType)
              ? "limitType: integer expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.PersonalLossLimitResponse) return e;
            let t = new J.game.PersonalLossLimitResponse();
            return null != e.limitType && (t.limitType = 0 | e.limitType), t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && (n.limitType = 0),
              null != e.limitType &&
                e.hasOwnProperty("limitType") &&
                (n.limitType = e.limitType),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastChipInResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.item = null),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.item &&
                Object.hasOwnProperty.call(e, "item") &&
                J.game.ChipInResult.encode(
                  e.item,
                  t.uint32(10).fork()
                ).ldelim(),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastChipInResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1)
                r.item = J.game.ChipInResult.decode(e, e.uint32());
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.item && e.hasOwnProperty("item")) {
              let t = J.game.ChipInResult.verify(e.item);
              if (t) return "item." + t;
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastChipInResponse) return e;
            let t = new J.game.BroadcastChipInResponse();
            if (null != e.item) {
              if ("object" != typeof e.item)
                throw TypeError(
                  ".game.BroadcastChipInResponse.item: object expected"
                );
              t.item = J.game.ChipInResult.fromObject(e.item);
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && (n.item = null),
              null != e.item &&
                e.hasOwnProperty("item") &&
                (n.item = J.game.ChipInResult.toObject(e.item, t)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.GroupCashOutRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.site = 0),
          (e.prototype.clientMultiplier = U.Long
            ? U.Long.fromBits(0, 0, !1)
            : 0),
          (e.prototype.auto = !1),
          (e.prototype.pingTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.betId = ""),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.site &&
                Object.hasOwnProperty.call(e, "site") &&
                t.uint32(8).int32(e.site),
              null != e.clientMultiplier &&
                Object.hasOwnProperty.call(e, "clientMultiplier") &&
                t.uint32(16).int64(e.clientMultiplier),
              null != e.auto &&
                Object.hasOwnProperty.call(e, "auto") &&
                t.uint32(24).bool(e.auto),
              null != e.pingTime &&
                Object.hasOwnProperty.call(e, "pingTime") &&
                t.uint32(32).int64(e.pingTime),
              null != e.betId &&
                Object.hasOwnProperty.call(e, "betId") &&
                t.uint32(42).string(e.betId),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.GroupCashOutRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.site = e.int32();
                  break;
                case 2:
                  r.clientMultiplier = e.int64();
                  break;
                case 3:
                  r.auto = e.bool();
                  break;
                case 4:
                  r.pingTime = e.int64();
                  break;
                case 5:
                  r.betId = e.string();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.site &&
                e.hasOwnProperty("site") &&
                !U.isInteger(e.site)
              ? "site: integer expected"
              : null != e.clientMultiplier &&
                e.hasOwnProperty("clientMultiplier") &&
                !(
                  U.isInteger(e.clientMultiplier) ||
                  (e.clientMultiplier &&
                    U.isInteger(e.clientMultiplier.low) &&
                    U.isInteger(e.clientMultiplier.high))
                )
              ? "clientMultiplier: integer|Long expected"
              : null != e.auto &&
                e.hasOwnProperty("auto") &&
                "boolean" != typeof e.auto
              ? "auto: boolean expected"
              : null != e.pingTime &&
                e.hasOwnProperty("pingTime") &&
                !(
                  U.isInteger(e.pingTime) ||
                  (e.pingTime &&
                    U.isInteger(e.pingTime.low) &&
                    U.isInteger(e.pingTime.high))
                )
              ? "pingTime: integer|Long expected"
              : null != e.betId &&
                e.hasOwnProperty("betId") &&
                !U.isString(e.betId)
              ? "betId: string expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.GroupCashOutRequest) return e;
            let t = new J.game.GroupCashOutRequest();
            return (
              null != e.site && (t.site = 0 | e.site),
              null != e.clientMultiplier &&
                (U.Long
                  ? ((t.clientMultiplier = U.Long.fromValue(
                      e.clientMultiplier
                    )).unsigned = !1)
                  : "string" == typeof e.clientMultiplier
                  ? (t.clientMultiplier = parseInt(e.clientMultiplier, 10))
                  : "number" == typeof e.clientMultiplier
                  ? (t.clientMultiplier = e.clientMultiplier)
                  : "object" == typeof e.clientMultiplier &&
                    (t.clientMultiplier = new U.LongBits(
                      e.clientMultiplier.low >>> 0,
                      e.clientMultiplier.high >>> 0
                    ).toNumber())),
              null != e.auto && (t.auto = Boolean(e.auto)),
              null != e.pingTime &&
                (U.Long
                  ? ((t.pingTime = U.Long.fromValue(e.pingTime)).unsigned = !1)
                  : "string" == typeof e.pingTime
                  ? (t.pingTime = parseInt(e.pingTime, 10))
                  : "number" == typeof e.pingTime
                  ? (t.pingTime = e.pingTime)
                  : "object" == typeof e.pingTime &&
                    (t.pingTime = new U.LongBits(
                      e.pingTime.low >>> 0,
                      e.pingTime.high >>> 0
                    ).toNumber())),
              null != e.betId && (t.betId = String(e.betId)),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.site = 0), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.clientMultiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.clientMultiplier = t.longs === String ? "0" : 0;
              if (((n.auto = !1), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.pingTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.pingTime = t.longs === String ? "0" : 0;
              n.betId = "";
            }
            return (
              null != e.site && e.hasOwnProperty("site") && (n.site = e.site),
              null != e.clientMultiplier &&
                e.hasOwnProperty("clientMultiplier") &&
                ("number" == typeof e.clientMultiplier
                  ? (n.clientMultiplier =
                      t.longs === String
                        ? String(e.clientMultiplier)
                        : e.clientMultiplier)
                  : (n.clientMultiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.clientMultiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.clientMultiplier.low >>> 0,
                            e.clientMultiplier.high >>> 0
                          ).toNumber()
                        : e.clientMultiplier)),
              null != e.auto && e.hasOwnProperty("auto") && (n.auto = e.auto),
              null != e.pingTime &&
                e.hasOwnProperty("pingTime") &&
                ("number" == typeof e.pingTime
                  ? (n.pingTime =
                      t.longs === String ? String(e.pingTime) : e.pingTime)
                  : (n.pingTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.pingTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.pingTime.low >>> 0,
                            e.pingTime.high >>> 0
                          ).toNumber()
                        : e.pingTime)),
              null != e.betId &&
                e.hasOwnProperty("betId") &&
                (n.betId = e.betId),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.GroupCashOutResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.transactionId = ""),
          (e.prototype.balance = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.award = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.site = 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.transactionId &&
                Object.hasOwnProperty.call(e, "transactionId") &&
                t.uint32(10).string(e.transactionId),
              null != e.balance &&
                Object.hasOwnProperty.call(e, "balance") &&
                t.uint32(16).int64(e.balance),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(24).int64(e.multiplier),
              null != e.award &&
                Object.hasOwnProperty.call(e, "award") &&
                t.uint32(32).int64(e.award),
              null != e.site &&
                Object.hasOwnProperty.call(e, "site") &&
                t.uint32(40).int32(e.site),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.GroupCashOutResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.transactionId = e.string();
                  break;
                case 2:
                  r.balance = e.int64();
                  break;
                case 3:
                  r.multiplier = e.int64();
                  break;
                case 4:
                  r.award = e.int64();
                  break;
                case 5:
                  r.site = e.int32();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                !U.isString(e.transactionId)
              ? "transactionId: string expected"
              : null != e.balance &&
                e.hasOwnProperty("balance") &&
                !(
                  U.isInteger(e.balance) ||
                  (e.balance &&
                    U.isInteger(e.balance.low) &&
                    U.isInteger(e.balance.high))
                )
              ? "balance: integer|Long expected"
              : null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                !(
                  U.isInteger(e.multiplier) ||
                  (e.multiplier &&
                    U.isInteger(e.multiplier.low) &&
                    U.isInteger(e.multiplier.high))
                )
              ? "multiplier: integer|Long expected"
              : null != e.award &&
                e.hasOwnProperty("award") &&
                !(
                  U.isInteger(e.award) ||
                  (e.award &&
                    U.isInteger(e.award.low) &&
                    U.isInteger(e.award.high))
                )
              ? "award: integer|Long expected"
              : null != e.site &&
                e.hasOwnProperty("site") &&
                !U.isInteger(e.site)
              ? "site: integer expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.GroupCashOutResponse) return e;
            let t = new J.game.GroupCashOutResponse();
            return (
              null != e.transactionId &&
                (t.transactionId = String(e.transactionId)),
              null != e.balance &&
                (U.Long
                  ? ((t.balance = U.Long.fromValue(e.balance)).unsigned = !1)
                  : "string" == typeof e.balance
                  ? (t.balance = parseInt(e.balance, 10))
                  : "number" == typeof e.balance
                  ? (t.balance = e.balance)
                  : "object" == typeof e.balance &&
                    (t.balance = new U.LongBits(
                      e.balance.low >>> 0,
                      e.balance.high >>> 0
                    ).toNumber())),
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              null != e.award &&
                (U.Long
                  ? ((t.award = U.Long.fromValue(e.award)).unsigned = !1)
                  : "string" == typeof e.award
                  ? (t.award = parseInt(e.award, 10))
                  : "number" == typeof e.award
                  ? (t.award = e.award)
                  : "object" == typeof e.award &&
                    (t.award = new U.LongBits(
                      e.award.low >>> 0,
                      e.award.high >>> 0
                    ).toNumber())),
              null != e.site && (t.site = 0 | e.site),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (((n.transactionId = ""), U.Long)) {
                let e = new U.Long(0, 0, !1);
                n.balance =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.balance = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.award =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.award = t.longs === String ? "0" : 0;
              n.site = 0;
            }
            return (
              null != e.transactionId &&
                e.hasOwnProperty("transactionId") &&
                (n.transactionId = e.transactionId),
              null != e.balance &&
                e.hasOwnProperty("balance") &&
                ("number" == typeof e.balance
                  ? (n.balance =
                      t.longs === String ? String(e.balance) : e.balance)
                  : (n.balance =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.balance)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.balance.low >>> 0,
                            e.balance.high >>> 0
                          ).toNumber()
                        : e.balance)),
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              null != e.award &&
                e.hasOwnProperty("award") &&
                ("number" == typeof e.award
                  ? (n.award = t.longs === String ? String(e.award) : e.award)
                  : (n.award =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.award)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.award.low >>> 0,
                            e.award.high >>> 0
                          ).toNumber()
                        : e.award)),
              null != e.site && e.hasOwnProperty("site") && (n.site = e.site),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastCashOutResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.item = null),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.item &&
                Object.hasOwnProperty.call(e, "item") &&
                J.game.ChipInResult.encode(
                  e.item,
                  t.uint32(10).fork()
                ).ldelim(),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastCashOutResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1)
                r.item = J.game.ChipInResult.decode(e, e.uint32());
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.item && e.hasOwnProperty("item")) {
              let t = J.game.ChipInResult.verify(e.item);
              if (t) return "item." + t;
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastCashOutResponse) return e;
            let t = new J.game.BroadcastCashOutResponse();
            if (null != e.item) {
              if ("object" != typeof e.item)
                throw TypeError(
                  ".game.BroadcastCashOutResponse.item: object expected"
                );
              t.item = J.game.ChipInResult.fromObject(e.item);
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && (n.item = null),
              null != e.item &&
                e.hasOwnProperty("item") &&
                (n.item = J.game.ChipInResult.toObject(e.item, t)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastFlyingMultiplierResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.multiplier = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.flyingTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.multiplier &&
                Object.hasOwnProperty.call(e, "multiplier") &&
                t.uint32(8).int64(e.multiplier),
              null != e.flyingTime &&
                Object.hasOwnProperty.call(e, "flyingTime") &&
                t.uint32(16).int64(e.flyingTime),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastFlyingMultiplierResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.multiplier = e.int64();
                  break;
                case 2:
                  r.flyingTime = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                !(
                  U.isInteger(e.multiplier) ||
                  (e.multiplier &&
                    U.isInteger(e.multiplier.low) &&
                    U.isInteger(e.multiplier.high))
                )
              ? "multiplier: integer|Long expected"
              : null != e.flyingTime &&
                e.hasOwnProperty("flyingTime") &&
                !(
                  U.isInteger(e.flyingTime) ||
                  (e.flyingTime &&
                    U.isInteger(e.flyingTime.low) &&
                    U.isInteger(e.flyingTime.high))
                )
              ? "flyingTime: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastFlyingMultiplierResponse) return e;
            let t = new J.game.BroadcastFlyingMultiplierResponse();
            return (
              null != e.multiplier &&
                (U.Long
                  ? ((t.multiplier = U.Long.fromValue(
                      e.multiplier
                    )).unsigned = !1)
                  : "string" == typeof e.multiplier
                  ? (t.multiplier = parseInt(e.multiplier, 10))
                  : "number" == typeof e.multiplier
                  ? (t.multiplier = e.multiplier)
                  : "object" == typeof e.multiplier &&
                    (t.multiplier = new U.LongBits(
                      e.multiplier.low >>> 0,
                      e.multiplier.high >>> 0
                    ).toNumber())),
              null != e.flyingTime &&
                (U.Long
                  ? ((t.flyingTime = U.Long.fromValue(
                      e.flyingTime
                    )).unsigned = !1)
                  : "string" == typeof e.flyingTime
                  ? (t.flyingTime = parseInt(e.flyingTime, 10))
                  : "number" == typeof e.flyingTime
                  ? (t.flyingTime = e.flyingTime)
                  : "object" == typeof e.flyingTime &&
                    (t.flyingTime = new U.LongBits(
                      e.flyingTime.low >>> 0,
                      e.flyingTime.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.multiplier =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.multiplier = t.longs === String ? "0" : 0;
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.flyingTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.flyingTime = t.longs === String ? "0" : 0;
            }
            return (
              null != e.multiplier &&
                e.hasOwnProperty("multiplier") &&
                ("number" == typeof e.multiplier
                  ? (n.multiplier =
                      t.longs === String ? String(e.multiplier) : e.multiplier)
                  : (n.multiplier =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.multiplier)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.multiplier.low >>> 0,
                            e.multiplier.high >>> 0
                          ).toNumber()
                        : e.multiplier)),
              null != e.flyingTime &&
                e.hasOwnProperty("flyingTime") &&
                ("number" == typeof e.flyingTime
                  ? (n.flyingTime =
                      t.longs === String ? String(e.flyingTime) : e.flyingTime)
                  : (n.flyingTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.flyingTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.flyingTime.low >>> 0,
                            e.flyingTime.high >>> 0
                          ).toNumber()
                        : e.flyingTime)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastListRequest = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return t || (t = F.create()), t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastListRequest();
            for (; e.pos < n; ) {
              let t = e.uint32();
              e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null;
          }),
          (e.fromObject = function (e) {
            return e instanceof J.game.BroadcastListRequest
              ? e
              : new J.game.BroadcastListRequest();
          }),
          (e.toObject = function () {
            return {};
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastMessage = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.id = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.prototype.gameId = 0),
          (e.prototype.gameName = ""),
          (e.prototype.currencyType = ""),
          (e.prototype.contentType = ""),
          (e.prototype.content = ""),
          (e.prototype.createTime = U.Long ? U.Long.fromBits(0, 0, !1) : 0),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.id &&
                Object.hasOwnProperty.call(e, "id") &&
                t.uint32(8).int64(e.id),
              null != e.gameId &&
                Object.hasOwnProperty.call(e, "gameId") &&
                t.uint32(16).int32(e.gameId),
              null != e.gameName &&
                Object.hasOwnProperty.call(e, "gameName") &&
                t.uint32(26).string(e.gameName),
              null != e.currencyType &&
                Object.hasOwnProperty.call(e, "currencyType") &&
                t.uint32(34).string(e.currencyType),
              null != e.contentType &&
                Object.hasOwnProperty.call(e, "contentType") &&
                t.uint32(42).string(e.contentType),
              null != e.content &&
                Object.hasOwnProperty.call(e, "content") &&
                t.uint32(50).string(e.content),
              null != e.createTime &&
                Object.hasOwnProperty.call(e, "createTime") &&
                t.uint32(56).int64(e.createTime),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastMessage();
            for (; e.pos < n; ) {
              let t = e.uint32();
              switch (t >>> 3) {
                case 1:
                  r.id = e.int64();
                  break;
                case 2:
                  r.gameId = e.int32();
                  break;
                case 3:
                  r.gameName = e.string();
                  break;
                case 4:
                  r.currencyType = e.string();
                  break;
                case 5:
                  r.contentType = e.string();
                  break;
                case 6:
                  r.content = e.string();
                  break;
                case 7:
                  r.createTime = e.int64();
                  break;
                default:
                  e.skipType(7 & t);
              }
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            return "object" != typeof e || null === e
              ? "object expected"
              : null != e.id &&
                e.hasOwnProperty("id") &&
                !(
                  U.isInteger(e.id) ||
                  (e.id && U.isInteger(e.id.low) && U.isInteger(e.id.high))
                )
              ? "id: integer|Long expected"
              : null != e.gameId &&
                e.hasOwnProperty("gameId") &&
                !U.isInteger(e.gameId)
              ? "gameId: integer expected"
              : null != e.gameName &&
                e.hasOwnProperty("gameName") &&
                !U.isString(e.gameName)
              ? "gameName: string expected"
              : null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                !U.isString(e.currencyType)
              ? "currencyType: string expected"
              : null != e.contentType &&
                e.hasOwnProperty("contentType") &&
                !U.isString(e.contentType)
              ? "contentType: string expected"
              : null != e.content &&
                e.hasOwnProperty("content") &&
                !U.isString(e.content)
              ? "content: string expected"
              : null != e.createTime &&
                e.hasOwnProperty("createTime") &&
                !(
                  U.isInteger(e.createTime) ||
                  (e.createTime &&
                    U.isInteger(e.createTime.low) &&
                    U.isInteger(e.createTime.high))
                )
              ? "createTime: integer|Long expected"
              : null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastMessage) return e;
            let t = new J.game.BroadcastMessage();
            return (
              null != e.id &&
                (U.Long
                  ? ((t.id = U.Long.fromValue(e.id)).unsigned = !1)
                  : "string" == typeof e.id
                  ? (t.id = parseInt(e.id, 10))
                  : "number" == typeof e.id
                  ? (t.id = e.id)
                  : "object" == typeof e.id &&
                    (t.id = new U.LongBits(
                      e.id.low >>> 0,
                      e.id.high >>> 0
                    ).toNumber())),
              null != e.gameId && (t.gameId = 0 | e.gameId),
              null != e.gameName && (t.gameName = String(e.gameName)),
              null != e.currencyType &&
                (t.currencyType = String(e.currencyType)),
              null != e.contentType && (t.contentType = String(e.contentType)),
              null != e.content && (t.content = String(e.content)),
              null != e.createTime &&
                (U.Long
                  ? ((t.createTime = U.Long.fromValue(
                      e.createTime
                    )).unsigned = !1)
                  : "string" == typeof e.createTime
                  ? (t.createTime = parseInt(e.createTime, 10))
                  : "number" == typeof e.createTime
                  ? (t.createTime = e.createTime)
                  : "object" == typeof e.createTime &&
                    (t.createTime = new U.LongBits(
                      e.createTime.low >>> 0,
                      e.createTime.high >>> 0
                    ).toNumber())),
              t
            );
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (t.defaults) {
              if (U.Long) {
                let e = new U.Long(0, 0, !1);
                n.id =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.id = t.longs === String ? "0" : 0;
              if (
                ((n.gameId = 0),
                (n.gameName = ""),
                (n.currencyType = ""),
                (n.contentType = ""),
                (n.content = ""),
                U.Long)
              ) {
                let e = new U.Long(0, 0, !1);
                n.createTime =
                  t.longs === String
                    ? e.toString()
                    : t.longs === Number
                    ? e.toNumber()
                    : e;
              } else n.createTime = t.longs === String ? "0" : 0;
            }
            return (
              null != e.id &&
                e.hasOwnProperty("id") &&
                ("number" == typeof e.id
                  ? (n.id = t.longs === String ? String(e.id) : e.id)
                  : (n.id =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.id)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.id.low >>> 0,
                            e.id.high >>> 0
                          ).toNumber()
                        : e.id)),
              null != e.gameId &&
                e.hasOwnProperty("gameId") &&
                (n.gameId = e.gameId),
              null != e.gameName &&
                e.hasOwnProperty("gameName") &&
                (n.gameName = e.gameName),
              null != e.currencyType &&
                e.hasOwnProperty("currencyType") &&
                (n.currencyType = e.currencyType),
              null != e.contentType &&
                e.hasOwnProperty("contentType") &&
                (n.contentType = e.contentType),
              null != e.content &&
                e.hasOwnProperty("content") &&
                (n.content = e.content),
              null != e.createTime &&
                e.hasOwnProperty("createTime") &&
                ("number" == typeof e.createTime
                  ? (n.createTime =
                      t.longs === String ? String(e.createTime) : e.createTime)
                  : (n.createTime =
                      t.longs === String
                        ? U.Long.prototype.toString.call(e.createTime)
                        : t.longs === Number
                        ? new U.LongBits(
                            e.createTime.low >>> 0,
                            e.createTime.high >>> 0
                          ).toNumber()
                        : e.createTime)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastListResponse = (function () {
        function e(e) {
          if (((this.messages = []), e))
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.messages = U.emptyArray),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            if (
              (t || (t = F.create()), null != e.messages && e.messages.length)
            )
              for (let n = 0; n < e.messages.length; ++n)
                J.game.BroadcastMessage.encode(
                  e.messages[n],
                  t.uint32(10).fork()
                ).ldelim();
            return t;
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastListResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1)
                (r.messages && r.messages.length) || (r.messages = []),
                  r.messages.push(
                    J.game.BroadcastMessage.decode(e, e.uint32())
                  );
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.messages && e.hasOwnProperty("messages")) {
              if (!Array.isArray(e.messages)) return "messages: array expected";
              for (let t = 0; t < e.messages.length; ++t) {
                let n = J.game.BroadcastMessage.verify(e.messages[t]);
                if (n) return "messages." + n;
              }
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastListResponse) return e;
            let t = new J.game.BroadcastListResponse();
            if (e.messages) {
              if (!Array.isArray(e.messages))
                throw TypeError(
                  ".game.BroadcastListResponse.messages: array expected"
                );
              t.messages = [];
              for (let n = 0; n < e.messages.length; ++n) {
                if ("object" != typeof e.messages[n])
                  throw TypeError(
                    ".game.BroadcastListResponse.messages: object expected"
                  );
                t.messages[n] = J.game.BroadcastMessage.fromObject(
                  e.messages[n]
                );
              }
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            if (
              ((t.arrays || t.defaults) && (n.messages = []),
              e.messages && e.messages.length)
            ) {
              n.messages = [];
              for (let r = 0; r < e.messages.length; ++r)
                n.messages[r] = J.game.BroadcastMessage.toObject(
                  e.messages[r],
                  t
                );
            }
            return n;
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      (e.BroadcastResponse = (function () {
        function e(e) {
          if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.message = null),
          (e.create = function (t) {
            return new e(t);
          }),
          (e.encode = function (e, t) {
            return (
              t || (t = F.create()),
              null != e.message &&
                Object.hasOwnProperty.call(e, "message") &&
                J.game.BroadcastMessage.encode(
                  e.message,
                  t.uint32(10).fork()
                ).ldelim(),
              t
            );
          }),
          (e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          }),
          (e.decode = function (e, t) {
            e instanceof q || (e = q.create(e));
            let n = void 0 === t ? e.len : e.pos + t,
              r = new J.game.BroadcastResponse();
            for (; e.pos < n; ) {
              let t = e.uint32();
              if (t >>> 3 == 1)
                r.message = J.game.BroadcastMessage.decode(e, e.uint32());
              else e.skipType(7 & t);
            }
            return r;
          }),
          (e.decodeDelimited = function (e) {
            return e instanceof q || (e = new q(e)), this.decode(e, e.uint32());
          }),
          (e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.message && e.hasOwnProperty("message")) {
              let t = J.game.BroadcastMessage.verify(e.message);
              if (t) return "message." + t;
            }
            return null;
          }),
          (e.fromObject = function (e) {
            if (e instanceof J.game.BroadcastResponse) return e;
            let t = new J.game.BroadcastResponse();
            if (null != e.message) {
              if ("object" != typeof e.message)
                throw TypeError(
                  ".game.BroadcastResponse.message: object expected"
                );
              t.message = J.game.BroadcastMessage.fromObject(e.message);
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            let n = {};
            return (
              t.defaults && (n.message = null),
              null != e.message &&
                e.hasOwnProperty("message") &&
                (n.message = J.game.BroadcastMessage.toObject(e.message, t)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, n.util.toJSONOptions);
          }),
          e
        );
      })()),
      e
    );
  })());
class z {
  constructor(e, t) {
    (this.socketPath = e),
      (this.handler = t),
      this.socketPath,
      this.handler,
      (this.socket = new WebSocket(this.socketPath)),
      (this.socket.onopen = this.OnOpen.bind(this)),
      (this.socket.onmessage = this.OnMessage.bind(this)),
      (this.socket.onclose = this.OnClose.bind(this)),
      (this.socket.onerror = this.OnError.bind(this));
  }
  OnOpen() {
    console.log("[GameConnect] OnOpen"), this.handler.SendLoginRequest();
  }
  OnMessage(e) {
    let t = new FileReader();
    t.readAsArrayBuffer(e.data),
      (t.onload = (e) => {
        let t = new Uint8Array(e.target.result),
          n = new Uint32Array(t.slice(0, 4).buffer)[0];
        this.handler.process(n, t.slice(4));
      });
  }
  OnClose(e) {
    e.wasClean
      ? console.log(
          `[GameConnect] OnClose: wasClean, code=${e.code} reason=${e.reason}`
        )
      : console.log("[GameConnect] OnClose: died"),
      this.handler.ResetConn();
  }
  OnError(e) {
    console.log("[GameConnect] OnError", e);
  }
  Send(e, t) {
    const n = new Uint32Array([e]).buffer;
    let r = new Uint8Array(4 + t.length);
    r.set(new Uint8Array(n), 0), r.set(t, 4), this.socket.send(r);
  }
}
const X = r("player", {
    state: () => ({
      isLogin: !1,
      uid: "",
      nickname: "",
      balance: 0,
      currencyType: "",
      currencyRate: 1,
      currencyChipInSteps: [],
      currentChipInIndex: 0,
      lobbyUrl: "",
      depositUrl: "",
      maxAnteLimit: 0,
      maxAwardLimit: 0,
      lastWeekStatus: -1,
      newPlayer: !1
    }),
    getters: {
      getCurrentChipValue() {
        return this.currencyChipInSteps[this.currentChipInIndex];
      },
      getDisplayBalance() {
        return G(this.balance, 2, this.currencyRate);
      }
    },
    actions: {
      back() {
        "" !== this.lobbyUrl
          ? (console.log("back lobbyUrl: " + this.lobbyUrl),
            (window.location.href = this.lobbyUrl))
          : (console.log("back window.history.back()"), window.history.back());
      }
    }
  }),
  Y = r("history", {
    state: () => ({ showHistoryPanel: !1, histories: [] }),
    getters: {},
    actions: {
      initHistory(e) {
        (this.histories = e), this.printHistory();
      },
      addHistory(e, t) {
        let n = new $.MultiplierRecord({ transactionId: e, multiplier: t });
        this.histories.unshift(n),
          this.histories.length > 30 && this.histories.pop(),
          this.printHistory();
      },
      printHistory() {}
    }
  }),
  Q = r("messageBox", {
    state: () => ({ show: !1, message: "hello world" }),
    getters: {},
    actions: {
      openMessage(e) {
        (this.show = !0), (this.message = e);
      },
      closeMessage() {
        this.show = !1;
      }
    }
  }),
  K = r("broadcast", {
    state: () => ({ broadcastList: [] }),
    getters: {},
    actions: {
      initBroadcastList(e) {
        (this.broadcastList = e), this.printBroadcastList();
      },
      addBroadcast(e) {
        this.broadcastList.unshift(e),
          this.broadcastList.length > 10 && this.broadcastList.pop(),
          this.printBroadcastList();
      },
      printBroadcastList() {
        for (let e = 0; e < this.broadcastList.length; e++) {
          const t = this.broadcastList[e];
          new Date(t.createTime).toLocaleString();
          t.content;
        }
      }
    }
  });
class Z {
  constructor(e, t) {
    (this.socketPath = t),
      (this.playerStore = X()),
      (this.gameManagerStore = ee()),
      (this.gameManagerStore.messageHandler = this),
      (this.historyStore = Y()),
      (this.messageBoxStore = Q()),
      (this.broadcastStore = K());
  }
  InitConn() {
    console.log("MessageHandler InitConn", this.socketPath),
      (this.gameConnect = new z(this.socketPath, this));
  }
  ResetConn() {
    console.log("MessageHandler ResetConn"),
      (this.gameManagerStore.isReconnecting = !0),
      this.socketPath &&
        setTimeout(() => {
          this.InitConn();
        }, D);
  }
  process(e, t) {
    switch (e) {
      case $.MsgType.Login_Response:
        this.loginResponse(t);
        break;
      case $.MsgType.Pong:
        this.pongResponse(t);
        break;
      case $.MsgType.Tip_Message_Response:
        this.tipMessageResponse(t);
        break;
      case $.MsgType.Jack_Pot_Pool_Response:
        this.jackpotResponse(t);
        break;
      case $.MsgType.Rank_List_Response:
        this.rankListResponse(t);
        break;
      case $.MsgType.Logout_Response:
        this.logoutResponse(t);
        break;
      case $.MsgType.Group_Game_Status_Sync_Response:
        this.GroupGameStatueSyncResponse(t);
        break;
      case $.MsgType.Group_Chip_In_Response:
        this.groupChipInResponse(t);
        break;
      case $.MsgType.Broadcast_Cash_Out_Response:
        this.broadcastCashOutResponse(t);
        break;
      case $.MsgType.Group_Cash_Out_Response:
        this.groupCashOutResponse(t);
        break;
      case $.MsgType.Weekly_Top_Reward_Response:
        this.weeklyTopRewardResponse(t);
        break;
      case $.MsgType.Take_Weekly_Top_Reward_Response:
        this.takeWeeklyTopRewardResponse(t);
        break;
      case $.MsgType.Broadcast_List_Response:
        this.broadcastListResponse(t);
        break;
      case $.MsgType.Broadcast_Response:
        this.broadcastResponse(t);
        break;
      default:
        console.error("unknown message type", e);
    }
  }
  SendLoginRequest() {
    var e;
    const t = $.LoginRequest.create();
    (t.uid = V("uid")),
      (t.channel = V("channel")),
      (t.token = V("token")),
      (t.currencyType = V("currencyType"));
    let n = $.LoginRequest.encode(t).finish();
    null == (e = this.gameConnect) || e.Send($.MsgType.Login_Request, n);
  }
  loginResponse(e) {
    let t = $.LoginResponse.decode(e);
    t.result === $.LoginResponse.Result.SUCCESS
      ? (console.log(
          `login succeed nickname=${t.nickname} balance=${
            t.balance / t.currencyRate
          } currencyType=${t.currencyType}`
        ),
        (this.playerStore.isLogin = !0),
        (this.playerStore.uid = t.uid),
        (this.playerStore.nickname = t.nickname),
        (this.playerStore.balance = t.balance),
        (this.playerStore.currencyType = t.currencyType),
        (this.playerStore.currencyRate = t.currencyRate),
        (this.playerStore.currencyChipInSteps = t.currencyChipInSteps),
        (this.playerStore.currentChipInIndex = 2),
        (this.playerStore.lobbyUrl = t.lobbyUrl),
        (this.playerStore.depositUrl = t.depositUrl),
        (this.playerStore.maxAnteLimit = t.maxAnteLimit),
        (this.playerStore.maxAwardLimit = t.maxAwardLimit),
        (this.playerStore.lastWeekStatus = t.lastWeekStatus),
        (this.playerStore.newPlayer = t.newPlayer),
        this.gameManagerStore.initGame(),
        this.historyStore.initHistory(t.multiplierHistories),
        this.gameManagerStore.groupStatusSync(t.syncStatusResponse),
        this.gameManagerStore.initAllChipInList(t.allChipInList),
        t.weeklyTopEnable && this.sendWeeklyTopRewardRequest(),
        (this.gameManagerStore.isLoading = !1),
        (this.gameManagerStore.isReconnecting = !1))
      : (console.log("login failed"),
        (this.playerStore.isLogin = !1),
        this.playerStore.back());
  }
  SendPingRequest() {
    var e;
    let t = $.PingRequest.create({ timestamp: Date.now() }),
      n = $.PingRequest.encode(t).finish();
    null == (e = this.gameConnect) || e.Send($.MsgType.Ping, n);
  }
  pongResponse(e) {
    this.gameManagerStore.pingTime =
      Date.now() - $.PongResponse.decode(e).timestamp;
  }
  jackpotResponse(e) {
    $.JackPotPoolResponse.decode(e);
  }
  tipMessageResponse(e) {
    let t = $.TipMessageResponse.decode(e);
    this.messageBoxStore.openMessage(t.txtMsg);
  }
  sendRankListRequest(e) {
    var t;
    let n = $.RankListRequest.create({ rankType: e });
    $.RankListRequest.RankType[n.rankType];
    let r = $.RankListRequest.encode(n).finish();
    null == (t = this.gameConnect) || t.Send($.MsgType.Rank_List_Request, r);
  }
  rankListResponse(e) {
    let t = $.RankListResponse.decode(e);
    this.gameManagerStore.rankList = t;
  }
  logoutResponse(e) {
    let t = $.LogoutResponse.decode(e);
    console.log(`logout ${$.LogoutResponse.LOGOUT_TYPE_ENUM[t.type]}`);
  }
  GroupGameStatueSyncResponse(e) {
    const t = $.GroupStatusSyncResponse.decode(e);
    this.gameManagerStore.groupStatusSync(t);
  }
  sendGroupChipInRequest(e, t) {
    var n;
    const r = $.ChipInItem.create({
        site: e,
        ante: parseInt(t * this.playerStore.currencyRate)
      }),
      i = $.GroupChipInRequest.create({ ante: r });
    this.gameManagerStore.decreaseAutoPlay(e),
      this.gameManagerStore.setMask(e, !0),
      this.gameManagerStore.setAnte(e, t),
      this.gameManagerStore.setIsBet(e, !0);
    let a = $.GroupChipInRequest.encode(i).finish();
    null == (n = this.gameConnect) ||
      n.Send($.MsgType.Group_Chip_In_Request, a);
  }
  groupChipInResponse(e) {
    const t = $.GroupChipInResponse.decode(e);
    t.result
      ? (t.balance, (this.playerStore.balance = t.balance))
      : (console.log("groupChipInResponse false:", t.site),
        this.gameManagerStore.setAnte(t.site, 0),
        this.gameManagerStore.setIsBet(t.site, !1),
        this.gameManagerStore.setIsNextRound(t.site, !1)),
      this.gameManagerStore.setMask(t.site, !1);
  }
  broadcastChipInResponse(e) {
    const t = $.BroadcastChipInResponse.decode(e);
    this.gameManagerStore.addBroadcastChipIn(t.item);
  }
  broadcastCashOutResponse(e) {
    const t = $.BroadcastCashOutResponse.decode(e);
    this.gameManagerStore.updateCashOut(t.item);
  }
  broadcastFlyingMultiplierResponse(e) {
    const t = $.BroadcastFlyingMultiplierResponse.decode(e);
    this.gameManagerStore.updateMultiplier(t);
  }
  sendCashOutRequest(e, t, n, r, i) {
    var a;
    let s = $.GroupCashOutRequest.create({
      site: e,
      clientMultiplier: t,
      auto: n,
      pingTime: r,
      betId: i
    });
    this.gameManagerStore.setMask(e, !0);
    let o = $.GroupCashOutRequest.encode(s).finish();
    null == (a = this.gameConnect) ||
      a.Send($.MsgType.Group_Cash_Out_Request, o);
  }
  groupCashOutResponse(e) {
    const t = $.GroupCashOutResponse.decode(e);
    t.site,
      t.multiplier,
      t.award,
      t.balance,
      t.transactionId,
      t.balance > 0 &&
        ((this.playerStore.balance = t.balance),
        t.award > 0 &&
          this.gameManagerStore.addWinMessage(t.multiplier, t.award)),
      this.gameManagerStore.setAnte(t.site, 0),
      this.gameManagerStore.setIsBet(t.site, !1),
      this.gameManagerStore.setMask(t.site, !1);
    const n =
      (0 === t.site
        ? this.gameManagerStore.valueStopSingleWin0
        : this.gameManagerStore.valueStopSingleWin1) *
      this.playerStore.currencyRate;
    n > 0 &&
      t.balance &&
      t.award > 0 &&
      t.award >= n &&
      this.gameManagerStore.stopAutoPlay(t.site);
  }
  sendWeeklyTopRewardRequest() {
    var e;
    let t = $.WeeklyTopRewardRequest.create({}),
      n = $.WeeklyTopRewardRequest.encode(t).finish();
    null == (e = this.gameConnect) ||
      e.Send($.MsgType.Weekly_Top_Reward_Request, n);
  }
  weeklyTopRewardResponse(e) {
    const t = $.WeeklyTopRewardResponse.decode(e);
    (this.gameManagerStore.respWeeklyTopReward = t),
      0 === t.lastWeekStatus && (this.gameManagerStore.isShowWeeklyAward = !0);
  }
  sendTakeWeeklyTopRewardRequest() {
    var e;
    let t = $.TakeWeeklyTopRewardRequest.create({}),
      n = $.TakeWeeklyTopRewardRequest.encode(t).finish();
    null == (e = this.gameConnect) ||
      e.Send($.MsgType.Take_Weekly_Top_Reward_Request, n);
  }
  takeWeeklyTopRewardResponse(e) {
    const t = $.TakeWeeklyTopRewardResponse.decode(e);
    (this.playerStore.balance = t.balance), this.sendWeeklyTopRewardRequest();
  }
  requestBroadcastList() {
    var e;
    let t = $.BroadcastListRequest.create({}),
      n = $.BroadcastListRequest.encode(t).finish();
    null == (e = this.gameConnect) ||
      e.Send($.MsgType.Broadcast_List_Request, n);
  }
  broadcastListResponse(e) {
    const t = $.BroadcastListResponse.decode(e);
    this.broadcastStore.initBroadcastList(t.messages);
  }
  broadcastResponse(e) {
    const t = $.BroadcastResponse.decode(e);
    this.broadcastStore.addBroadcast(t.message);
  }
}
const ee = r("gameManager", {
    state: () => ({
      playerStore: X(),
      messageHandler: null,
      pingIntervalId: 0,
      pingTime: 0,
      isLoading: !0,
      isReconnecting: !1,
      lastGroupStatusSyncResponse: null,
      lastFlyingMultiplier: null,
      remainingTime: 0,
      totalTime: 0,
      allChipInList: [],
      prevChipInList: [],
      myChipInList: [],
      preFlewAwayMultiplier: 0,
      winMessageList: [],
      rankList: null,
      isShowWeeklyAward: !1,
      respWeeklyTopReward: null,
      isShowSite1: !0,
      chipValue0: 0,
      chipValue1: 0,
      isBet0: !1,
      isBet1: !1,
      isNextRound0: !1,
      isNextRound1: !1,
      ante0: 0,
      ante1: 0,
      mask0: !1,
      mask1: !1,
      isShowAutoPlayOptions: !1,
      autoPlayOptionsSite: 0,
      autoPlay0: 0,
      autoPlay1: 0,
      autoPlayStartBalance0: 0,
      autoPlayStartBalance1: 0,
      valueStopDecreases0: 0,
      valueStopDecreases1: 0,
      valueStopIncreases0: 0,
      valueStopIncreases1: 0,
      valueStopSingleWin0: 0,
      valueStopSingleWin1: 0,
      isShowGameRules: !1
    }),
    getters: {
      totalWeeklyAward() {
        if (this.respWeeklyTopReward) {
          let e = 0;
          for (let t = 0; t < this.respWeeklyTopReward.currentWeek.length; t++)
            e += this.respWeeklyTopReward.currentWeek[t].reward;
          return e;
        }
        return 0;
      },
      currentBetId() {
        return this.lastGroupStatusSyncResponse
          ? this.lastGroupStatusSyncResponse.transactionId
          : "";
      },
      currentGroupStatus() {
        return this.lastGroupStatusSyncResponse
          ? this.lastGroupStatusSyncResponse.groupStatus
          : "";
      },
      currentFlyingMultiplierStr() {
        return this.lastFlyingMultiplier
          ? (this.lastFlyingMultiplier.multiplier / 100).toFixed(2) + "x"
          : "1.00x";
      },
      currentFlyingMultiplier() {
        return this.lastFlyingMultiplier
          ? this.lastFlyingMultiplier.multiplier
          : 100;
      },
      currentFlewAwayMultiplier() {
        return this.lastGroupStatusSyncResponse
          ? (this.lastGroupStatusSyncResponse.multiplier / 100).toFixed(2) + "x"
          : "1.00x";
      }
    },
    actions: {
      connectServer() {
        console.log("connect server");
        let e = V("api") || "ws://localhost:9001/game";
        (this.messageHandler = new Z(this, e)), this.messageHandler.InitConn();
      },
      initGame() {
        this.initPing(), this.messageHandler.requestBroadcastList();
      },
      initPing() {
        0 !== this.pingIntervalId && clearInterval(this.pingIntervalId),
          (this.pingIntervalId = setInterval(() => {
            this.messageHandler.SendPingRequest();
          }, _));
      },
      groupStatusSync(e) {
        this.lastGroupStatusSyncResponse = e;
        const t = Y();
        e.groupStatus === H.ChipIn
          ? ((this.remainingTime = e.remainingTime),
            (this.totalTime = e.totalTime),
            (this.prevChipInList = this.allChipInList.slice()),
            (this.preFlewAwayMultiplier =
              t.histories.length > 0 ? t.histories[0].multiplier : 0),
            this.clearAllChipInList())
          : e.groupStatus === H.Flying ||
            (e.groupStatus === H.EndRound &&
              (this.resetBetOp(),
              t.addHistory(e.transactionId, e.multiplier),
              this.allChipInList.forEach((e) => {
                e.uid === X().uid &&
                  this.myChipInList.unshift({
                    timestamp: Date.now(),
                    chipIn: e
                  });
              })));
      },
      resetBetOp() {
        this.setIsBet(0, !1),
          this.setIsBet(1, !1),
          this.setAnte(0, 0),
          this.setAnte(1, 0);
      },
      updateMultiplier(e) {
        this.lastFlyingMultiplier = e;
      },
      initAllChipInList(e) {
        this.clearAllChipInList();
        const t = X();
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          this.addBroadcastChipIn(r),
            this.currentGroupStatus === H.ChipIn &&
              r.uid === t.uid &&
              this.restoreBet(r);
        }
      },
      restoreBet(e) {
        if (0 === e.status) {
          const t = X();
          this.setAnte(e.site, e.ante),
            this.setIsBet(e.site, !0),
            this.setChipValue(e.site, (e.ante / t.currencyRate).toFixed(2));
        }
      },
      addBroadcastChipIn(e) {
        this.allChipInList.push(e);
      },
      clearAllChipInList() {
        this.allChipInList.length = 0;
      },
      updateCashOut(e) {
        for (let t = 0; t < this.allChipInList.length; t++) {
          const n = this.allChipInList[t];
          n.uid === e.uid && n.site === e.site && (this.allChipInList[t] = e);
        }
      },
      setMask(e, t) {
        0 === e ? (this.mask0 = t) : 1 === e && (this.mask1 = t);
      },
      setAnte(e, t) {
        0 === e ? (this.ante0 = t) : 1 === e && (this.ante1 = t);
      },
      setIsBet(e, t) {
        0 === e ? (this.isBet0 = t) : 1 === e && (this.isBet1 = t);
      },
      setIsNextRound(e, t) {
        0 === e ? (this.isNextRound0 = t) : 1 === e && (this.isNextRound1 = t);
      },
      setChipValue(e, t) {
        0 === e ? (this.chipValue0 = t) : 1 === e && (this.chipValue1 = t);
      },
      addWinMessage(e, t) {
        let n = { multiplier: e, award: t };
        this.winMessageList.push(n),
          setTimeout(() => {
            let e = this.winMessageList.indexOf(n);
            -1 !== e && this.winMessageList.splice(e, 1);
          }, 4e3);
      },
      showAutoPlayOptions(e, t = 0) {
        (this.isShowAutoPlayOptions = e), e && (this.autoPlayOptionsSite = t);
      },
      startAutoPlay(e, t, n, r, i) {
        0 === e
          ? ((this.autoPlay0 = t),
            (this.autoPlayStartBalance0 = X().balance),
            (this.valueStopDecreases0 = n),
            (this.valueStopIncreases0 = r),
            (this.valueStopSingleWin0 = i))
          : 1 === e &&
            ((this.autoPlay1 = t),
            (this.autoPlayStartBalance1 = X().balance),
            (this.valueStopDecreases1 = n),
            (this.valueStopIncreases1 = r),
            (this.valueStopSingleWin1 = i));
      },
      stopAutoPlay(e) {
        0 === e ? this.autoPlay0 : this.autoPlay1,
          0 === e
            ? ((this.autoPlay0 = 0),
              (this.autoPlayStartBalance0 = 0),
              (this.valueStopDecreases0 = 0),
              (this.valueStopIncreases0 = 0),
              (this.valueStopSingleWin0 = 0))
            : 1 === e &&
              ((this.autoPlay1 = 0),
              (this.autoPlayStartBalance1 = 0),
              (this.valueStopDecreases1 = 0),
              (this.valueStopIncreases1 = 0),
              (this.valueStopSingleWin1 = 0));
      },
      decreaseAutoPlay(e) {
        0 === e && this.autoPlay0 > 0
          ? (this.autoPlay0--, 0 === this.autoPlay0 && this.stopAutoPlay(e))
          : 1 === e &&
            this.autoPlay1 > 0 &&
            (this.autoPlay1--, 0 === this.autoPlay1 && this.stopAutoPlay(e));
      },
      getCurrency(e) {
        return G(e, 2, this.playerStore.currencyRate);
      }
    }
  }),
  te = r("settings", {
    state: () => ({ show: !1, isSound: !0, isAnimation: !0 }),
    getters: {},
    actions: {
      openSettings() {
        this.show = !0;
      },
      closeSettings() {
        this.show = !1;
      }
    }
  }),
  ne = "/logo.svg",
  re = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, i] of t) n[r] = i;
    return n;
  },
  ie = {
    name: "TopBar",
    components: {},
    mounted() {},
    computed: {
      totalWeeklyAward() {
        return (
          this.playerStore.currencyType +
          " " +
          (function (e, t) {
            let n,
              r = e / t;
            return (n = r >= 1e3 ? r / 1e3 + "k" : r.toString()), n;
          })(
            this.gameManagerStore.totalWeeklyAward,
            this.playerStore.currencyRate
          )
        );
      }
    },
    data: () => ({ gameManagerStore: ee(), playerStore: X() }),
    methods: {
      onBack() {},
      onSettings() {
        te().show = !0;
      }
    }
  },
  ae = (e) => (u("data-v-fa6c6037"), (e = e()), c(), e),
  se = { class: "top-bar" },
  oe = ae(() => s("img", { class: "logo", src: ne, alt: "logo" }, null, -1)),
  le = { class: "account" },
  ue = { class: "label" },
  ce = { class: "currency" },
  pe = ae(() =>
    s(
      "img",
      {
        class: "gold-icon",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAMAAAAAPFkHAAAC+lBMVEUAAAAAABwBBA8AABsAAAUAAR8AABsAAhIBAw8DBQ4AAAEAAxUAAAAAAB0AABwAAAEAABIAAAgDBQsAAAAAAAUAAAABBBEDBxEAAAAAAAAAAAEAAAcAABwAAh4AAAwGCRUAAAAAABwAAyEAAB7/////pQn/1Av/2wr/2Qn/2Rb/zQsAAAD/zwv/1grpeQj/0Qr/yRv/yBv/1xb/5Cv/zRr/own/6Cj/rAj/rwn/6ScAABv//y7/2xb/lwP/0Bn/5S3/5iv/2h3/sAb/mgT/kQL/7SP/yxv//ykAACIAABP/xQT/hAP/6ib/3gf/wAP/jAP/5xnlaAX/4AEAAR7/7Bf/pwn/nwb/yAL/7yv/4Rn/nAP/4iv+zR//uAf/qQfocQYAAAb/7Sf/1hz/whb/0Q0AAA3odQj/iQT/lAIQECP/4yL/5Rb/4Av/5Qr/swj/rAb/owX/1QIAACb/5h/1qQ3/+i3/9Sr/0B0CAR3/yAzregj/zAL/pgL/5QH/oAH/6y//9y7/8iaGdSErHCBILh3/3Rb/1BX4thX//xT/zRP/wBGyXQ7vkgz/7Qrzfgb/ngXmbQX//fn//ez/9tX/+ymdkiJtZCKHfyFVUCD/6h8+Nh84Hx7/+B3/3h1XOB1lOxj/4hPzog//tQ3uewj6hgb/6QX/+s7/+Kr/5oT/8XL/y1z/61IgGSOZgSEqJiAwLB8ICx7/0x3/yBj/uRHRiw7kngr6nAn9eAP/7sz/9J7/9YL/0XT/7WP/70W+rCezqCb/qyM1NB9uVR5MPx5gShz/7xuOaBr/8RWBRhX/2BKPThKaTg7rfwn/+OH/+Ln/+rT/5LH/7J7/25j/843/443/zob/8TXw2yn/1ynawinazib/0iL/8RzDnRx6XRv/nxj6shSscBT3rxOjbhO+gQ+eVA//3Q3/wQv3lgnugwnhdgj/8Oz/323/uk7/2Ev/tTjHuyjHuSjqsxzImRzVvRmmghl2PBj/8xbrmRTLag3Jag3vnAzgWAPiXgKtimCLAAAAJHRSTlMAgBu8ZdnnSzcS01fIopSQh3EF+a2fLCXq49u/r2BCDe/Qb/az25MaAAAHKUlEQVRIx5XXd1gScRjAcTTT9t57SAmXZhQ7FAISgYBEEUhQUQw1hDTNynZWmml777333nvvvffee/c8vXfcQdll9f3bz/O+97sTOEpJlW3kVbFBqVKlGlRq6E35j8pUKZ29cu+EQYMGHbixb8oqX69/1N5evqsmLb+s5/MHTp6syTCI3izfq61Y9u+wbCXeyuUX+fzMC6HBCW2g4I6ia5q3K5v7/U1W4U3ZMYCfGdolFGRwG7x2+zMOaL1KhH6+K3bw+f3Bhfa/CtKTZdr17JJsA96gTIBtIWEX3BAFT7uurfonWMt3xWV+FkAolEVXxaB1DMYD+17rQy7L8yYM4IeiMrRtt4hZL5bk5yckJLSJiSFsz/13tc3IpBdvPH8ABlMiui3dPNZ/a04HKG1tQkxMG5cVHT4qa0gmd8JVohMjZm1b4O/vfyqnQ1oaWIdjTnBPfLCIfVRW/jeZ/ZovROWsiG3H/dGW9AOIxjFz1uBWdEsBtvjMV3whwNCIlBPAXBSUK7NjTc+OaD2DH6uPyMr8LBvCtm2xZZeO9sc7Y3SwiXI4Pdth1lIQa5tZuppHloETEmLnsxhTxFgHh8M255gdDoczf3UwSkU9OivmDfY8Go19J/D1bYXClIizHjhmwTNVL+ihyew0O3LY7bBEd0YlSUbIahO04u6wzC5CIStiixuOXkRXRSfS6fRWiS3oac4oszOhJ0aHjUoqVEwlxpbPvsIHKfxp20XRqmg6UWILk47aL3+1i8YGBUmOlMb/yXwn8mHb0IilBBx7FYd4rQLTdLo5FjdVPEmuhdFKK8dlwczUjDG4PC2XE4iYmxgl5qwOcS0cFDRXMQR7Hmvzdoa1ZbFYfRfi8pw8uhW9WIEmm4tOvwM0SD2zIjZ0Ulg8iyXsS6y7SN4nsVXxWvQScCwh0PTZnVF6qBRI7+wd6NCM1AXEtiB/qzXdOEeEUlEBNvV+U6BeU2AorLsNP6E+IEloa91alFpCjsUC7ToCjria7/gwkFw7/uReik5sTVKL1s4ES7u8kOlwSgT1S744Dqh9O3E/ySBQOrtdiEUUYoBLxRYGCoekRPfd7H9802j/MYl9WpAWIJ8jSuHquZbHnWNjk3qrDwEtDftyuRnSBeeNgl1PN4Mkp6o1ej2XxY/53vvRhmNJ6plNKd6rroRxudz4/rvUxn7qm5e6k0Kol1DP5Sr5n2KjOGkbkhRD6lP8dmcNBJplsRXpdOKc7gHkMLDPdD2Ly8qMKTSzmVT2vKTBNShV4HkAOiDEptPpbKZugeR1D+Qq4c8ybwnMTCqVLR6hrUypOCEsXqlUDmhnKyoqEsj/SDP0SuXkrBQdk0kF6vzA86OUGhSmhDJDJMYisZjeLYC07rl6Td++87PWiqloHcSDw70ppSYCjY/P6igxGgXiVuQ0MNA+v//is2POCZyoZKruycpRUBofnzK9fZ5YLBYIWpPT7hEXFo6GD45dRipG5ft4VTCaIho6lEFjSsQCSS97S5K64587zyVRmDStT7aWATphGkAGw8BRiwVqk51MdjqJyfMSp2to9A1tBQrQSQdpDJTmSWwCtdPeiUQuxOQpQT+qe6gP0Bq7NbkMNM0chUDQVT6yGAwIwLfdZBTDumjyfdl1qwGtrH33EaO5Bp1CoJa0xC0hH/TdjsmxOkEUfkb30uOwL2gf3sThDCwDzaiwdRV3GtmtZSe8gJazpCMXYpJJyDTT4HAYCtWyrtCkMmgQw2DgdFUoJHL7yPl2ezdUzpLqR2JDN7lnmuV7ZAj+zV5PNn74UJrLavLYAsVGSY4qunXAg5aHM/Tx0vmLQZ4RENfJjL6bHleD+KkTviz1IMNlaakaRl4+m8rJz4M7rdRLpdL5cGO2SoxuuS7dWt0bp2WQ7D3DYWW8XIMGMuTSaNKBICOvjfF/KelHxaVqfXI4rEtUM042iLCeGBmolE4bsPWmjeqWs5fxkJoUd97VrenLhx8sbidLpQPHjROxJUXEskxVj8E8BJ4jTz5InGxP5HADrf1PHZ48LmygZa1Y7B5Jla+HmXV//Y1ZGeyQh5GRkam4y02NjNyfMqzAZmS6JTt6XTIPqUMckccisqnzOAk0DXhIw1jToyDoWyHHDZkm+YH0cKRJbUrxqqJ248aggtk9oNkFx2I7d45N2sD2jOwxI92K1AH5W+URRDt1nqKzK2DwCU9QZpRKdRuWRSo0ppDVCOzgJ5K5QZ5iH3GYAM0q1bopMiuC3xVyy0seIVF7cFJvKicqTW5atxeuEkHKl/CegCDh6TM+d5UoCuf2huYWblR3MH29PUXGi0OQ+nC0JdjqSBxPNuTIl0JFV0gxL2jEoRnJ2nCAdfz+9rpQAUHiwrWrVgyZMXPmjCFTl2l5qEOa+FD+XtXqCGhrOJbViqCV86lG+ZcaV62HeALnVYvy73n71Kxfrly9chVqVPYr6aXoB5BNFRk7SGm9AAAAAElFTkSuQmCC",
        alt: "gold"
      },
      null,
      -1
    )
  ),
  ge = { class: "balance" };
const de = re(ie, [
  [
    "render",
    function (e, t, n, r, u, c) {
      return (
        i(),
        a("div", se, [
          oe,
          s("div", le, [
            u.gameManagerStore.respWeeklyTopReward
              ? (i(),
                a(
                  "div",
                  {
                    key: 0,
                    class: "weekly-award-btn",
                    onClick:
                      t[0] ||
                      (t[0] = (e) =>
                        (u.gameManagerStore.isShowWeeklyAward = !0))
                  },
                  [
                    s("div", ue, o(e.$t("Ranking")), 1),
                    s("div", ce, o(c.totalWeeklyAward), 1)
                  ]
                ))
              : l("", !0),
            pe,
            s("div", ge, o(u.playerStore.getDisplayBalance), 1),
            s("img", {
              class: "settings-icon",
              onClick:
                t[1] || (t[1] = (...e) => c.onSettings && c.onSettings(...e)),
              src: "/assets/options-f2d3e866.svg",
              alt: "gold"
            })
          ])
        ])
      );
    }
  ],
  ["__scopeId", "data-v-fa6c6037"]
]);
const me = re(
    {
      name: "FlewAwayMultiplier",
      props: { multiplier: { type: Number, default: 0 } },
      methods: {
        getMultiplierStr: (e) => (e / 100).toFixed(2) + "x",
        getMultiplierColor: (e) =>
          e < 200 ? "color-2" : e < 1e3 ? "color-2-10" : "color-10"
      }
    },
    [
      [
        "render",
        function (e, t, n, r, s, l) {
          return (
            i(),
            a(
              "span",
              {
                class: p([
                  "flew-away-multiplier",
                  l.getMultiplierColor(n.multiplier)
                ])
              },
              o(l.getMultiplierStr(n.multiplier)),
              3
            )
          );
        }
      ],
      ["__scopeId", "data-v-dbe3b3db"]
    ]
  ),
  he = { class: "history-result" };
const ye = re(
    {
      name: "HistoryResult",
      components: { FlewAwayMultiplier: me },
      data: () => ({ historyStore: Y() }),
      methods: {}
    },
    [
      [
        "render",
        function (e, t, n, r, s, o) {
          const l = g("FlewAwayMultiplier");
          return (
            i(),
            a("div", he, [
              (i(!0),
              a(
                d,
                null,
                m(
                  s.historyStore.histories,
                  (e, t) => (
                    i(),
                    h(
                      l,
                      {
                        style: { "margin-left": "0.3rem" },
                        multiplier: e.multiplier,
                        key: t
                      },
                      null,
                      8,
                      ["multiplier"]
                    )
                  )
                ),
                128
              ))
            ])
          );
        }
      ],
      ["__scopeId", "data-v-5ef7429c"]
    ]
  ),
  we = {
    name: "FlightStage",
    data: () => ({
      isDebug: !1,
      gameManagerStore: ee(),
      settingsStore: te(),
      canvas: null,
      pixiApp: null,
      debugText: null,
      graphics: null,
      graphicsAxis: null,
      dotContainer: null,
      dotNumber: 11,
      dotsX: [],
      dotsY: [],
      spriteAviator: null,
      startFlyingTime: null,
      timeFlyTo2X: 8.4,
      tweenFlying: null,
      tweenFlewAway: null,
      margin: 20,
      dotRadius: 2,
      isDotMove: !1,
      tailLastTime: 0
    }),
    watch: {
      gameStatus(e, t) {
        e === H.ChipIn
          ? this.settingsStore.isAnimation && this.onReady()
          : e === H.Flying
          ? (this.settingsStore.isSound && this.$refs.audioStart.play(),
            this.settingsStore.isAnimation && this.flying())
          : e === H.EndRound &&
            (this.settingsStore.isSound &&
              ((this.$refs.audioFlewAway.volume = 0.3),
              this.$refs.audioFlewAway.play()),
            this.settingsStore.isAnimation && this.flewAway());
      },
      isAnimation(e, t) {
        e
          ? this.gameStatus === H.ChipIn
            ? this.onReady()
            : this.gameStatus === H.Flying
            ? this.flying()
            : this.gameStatus === H.EndRound && this.flewAway()
          : (this.spriteAviator.visible = !1);
      }
    },
    computed: {
      isAnimation() {
        return this.settingsStore.isAnimation;
      },
      GroupStatus: () => H,
      gameStatus() {
        return this.gameManagerStore.currentGroupStatus;
      },
      pos0() {
        return { x: this.margin, y: this.canvas.height - this.margin };
      },
      pos1() {
        return {
          x: this.canvas.width - 1.5 * this.spriteAviator.width,
          y: this.spriteAviator.height
        };
      },
      pos2() {
        return {
          x: this.canvas.width - this.spriteAviator.width,
          y: 2 * this.spriteAviator.height
        };
      }
    },
    mounted() {
      (this.isDebug = null !== V("debug")), this.init();
    },
    methods: {
      async init() {
        this.initPixi(),
          await this.initAviator(),
          this.gameStatus === H.ChipIn
            ? this.onReady()
            : this.gameStatus === H.Flying
            ? this.flying()
            : this.gameStatus === H.EndRound && this.flewAway();
      },
      initPixi() {
        (this.canvas = document.getElementById("pixi-canvas")),
          (this.pixiApp = new y({
            view: this.canvas,
            autoDensity: !0,
            transparent: !0,
            antialias: !1,
            backgroundColor: 0,
            resizeTo: this.canvas.parentElement
          })),
          (this.pixiApp.interactiveChildren = !1),
          (this.pixiApp.useContextAlpha = !1),
          (this.graphicsAxis = new w()),
          this.graphicsAxis.lineStyle(1, 2431772),
          this.graphicsAxis.moveTo(this.pos0.x, this.pos0.y),
          this.graphicsAxis.lineTo(this.canvas.width, this.pos0.y),
          this.graphicsAxis.moveTo(this.pos0.x, this.pos0.y),
          this.graphicsAxis.lineTo(this.pos0.x, 0),
          this.pixiApp.stage.addChild(this.graphicsAxis),
          (this.graphics = new w()),
          this.pixiApp.stage.addChild(this.graphics),
          this.initDot();
        const e = new f({ fill: "#00ff00", fontSize: 14 });
        (this.debugText = new b("", e)),
          (this.debugText.y = this.canvas.height - 20),
          this.pixiApp.stage.addChild(this.debugText),
          S.ticker.add(this.ticker);
      },
      initDot() {
        const e = k.from("./images/point.png");
        (this.dotContainer = new T()),
          this.pixiApp.stage.addChild(this.dotContainer);
        for (let t = 0; t < this.dotNumber; t++) {
          const t = new O(e);
          t.anchor.set(0.5),
            t.scale.set(0.25),
            this.dotsX.push(t),
            this.dotContainer.addChild(t);
        }
        for (let t = 0; t < this.dotNumber; t++) {
          const t = new O(e);
          t.anchor.set(0.5),
            t.scale.set(0.25),
            (t.tint = 1152982),
            this.dotsY.push(t),
            this.dotContainer.addChild(t);
        }
        this.resetDotPos();
      },
      async initAviator() {
        R.addBundle("aviator", {
          airplane1: "./airplane/airplane1.svg",
          airplane2: "./airplane/airplane2.svg",
          airplane3: "./airplane/airplane3.svg",
          airplane4: "./airplane/airplane4.svg"
        });
        const e = await R.loadBundle("aviator"),
          t = [];
        for (let n in e) t.push(e[n]);
        (this.spriteAviator = new L(t)),
          this.spriteAviator.anchor.set(0.1, 0.9),
          this.spriteAviator.scale.set(0.7),
          (this.spriteAviator.x = this.pos0.x),
          (this.spriteAviator.y = this.pos0.y),
          this.pixiApp.stage.addChild(this.spriteAviator),
          (this.spriteAviator.animationSpeed = 0.15),
          this.spriteAviator.play();
      },
      onReady() {
        this.spriteAviator &&
          ((this.spriteAviator.visible = !0),
          this.tweenFlewAway &&
            (this.tweenFlewAway.kill(), (this.tweenFlewAway = null)),
          (this.spriteAviator.x = this.pos0.x),
          (this.spriteAviator.y = this.pos0.y),
          this.resetDotPos());
      },
      flying() {
        this.spriteAviator &&
          ((this.spriteAviator.visible = !0),
          this.tweenFlying &&
            (this.tweenFlying.kill(), (this.tweenFlying = null)),
          (this.tweenFlying = S.timeline()
            .fromTo(
              this.spriteAviator,
              { x: this.pos0.x, y: this.pos0.y },
              {
                keyframes: [
                  {
                    x: 0.7 * this.pos1.x,
                    y:
                      this.canvas.height -
                      0.7 * this.spriteAviator.height -
                      this.margin,
                    duration: 0.5 * this.timeFlyTo2X,
                    ease: "linear"
                  },
                  {
                    x: this.pos1.x,
                    y: this.pos1.y,
                    duration: 0.5 * this.timeFlyTo2X,
                    ease: "power1",
                    onComplete: () => {
                      (this.startFlyingTime = new Date().getTime()),
                        (this.isDotMove = !0);
                    }
                  }
                ]
              }
            )
            .to(this.spriteAviator, {
              x: this.pos2.x,
              y: this.pos2.y,
              ease: "linear",
              duration: 2,
              yoyo: !0,
              repeat: -1
            })));
      },
      flewAway() {
        this.spriteAviator &&
          ((this.spriteAviator.visible = !0),
          (this.isDotMove = !1),
          this.tweenFlying &&
            (this.tweenFlying.kill(), (this.tweenFlying = null)),
          this.tweenFlewAway &&
            (this.tweenFlewAway.kill(), (this.tweenFlewAway = null)),
          (this.tweenFlewAway = S.to(this.spriteAviator, {
            x: this.canvas.width + 2 * this.spriteAviator.width,
            y: -this.spriteAviator.height,
            ease: "easeInOut",
            duration: 0.5,
            onComplete: () => {
              this.spriteAviator.visible = !1;
            }
          })));
      },
      drawDebug() {
        if (this.isDebug) {
          const e = this.pixiApp.ticker;
          this.debugText.text = `fps=${e.FPS.toFixed(
            2
          )} deltaMS=${e.deltaMS.toFixed(2)}`;
        }
      },
      ticker(e) {
        this.gameManagerStore.remainingTime > 0 &&
          ((this.gameManagerStore.remainingTime -= this.pixiApp.ticker.deltaMS),
          (this.gameManagerStore.remainingTime = Math.max(
            this.gameManagerStore.remainingTime,
            0
          ))),
          this.settingsStore.isAnimation
            ? ((this.graphicsAxis.visible = this.gameStatus === H.Flying),
              (this.dotContainer.visible = this.gameStatus === H.Flying),
              this.drawPoint(e),
              this.drawTail())
            : (this.graphics.clear(),
              (this.graphicsAxis.visible = !1),
              (this.dotContainer.visible = !1)),
          this.drawDebug();
      },
      resetDotPos() {
        const e = (this.canvas.width - this.margin) / (this.dotNumber - 1);
        for (let n = 0; n < this.dotNumber; n++) {
          const t = this.pos0.x + e * (n + 0.5),
            r = this.pos0.y + this.margin / 2,
            i = this.dotsX[n];
          (i.visible = !0), (i.x = t), (i.y = r);
        }
        const t = (this.canvas.height - this.margin) / (this.dotNumber - 1);
        for (let n = 0; n < this.dotNumber; n++) {
          const e = this.pos0.x - this.margin / 2,
            r = this.pos0.y - t * n,
            i = this.dotsY[n];
          (i.visible = !0), (i.x = e), (i.y = r);
        }
      },
      drawPoint(e) {
        if (!this.isDotMove) return;
        const t = new Date().getTime(),
          n = (this.canvas.width - this.margin) / (this.dotNumber - 1),
          r = (((t - this.startFlyingTime) % 4e3) / 4e3) * n;
        for (let s = 0; s < this.dotNumber; s++) {
          const e = this.pos0.x + n * (s + 0.5) - r,
            t = this.pos0.y + this.margin / 2,
            i = this.dotsX[s];
          (i.visible = e >= this.pos0.x), (i.x = e), (i.y = t);
        }
        const i = (this.canvas.height - this.margin) / (this.dotNumber - 1),
          a = (((t - this.startFlyingTime) % 4e3) / 4e3) * i;
        for (let s = 0; s < this.dotNumber; s++) {
          const e = this.pos0.x - this.margin / 2,
            t = this.pos0.y - i * s + a,
            n = this.dotsY[s];
          (n.visible = t <= this.pos0.y), (n.x = e), (n.y = t);
        }
      },
      drawTail() {
        this.spriteAviator &&
          (this.graphics.clear(),
          this.gameStatus === H.Flying &&
            (this.graphics.lineStyle(3, 16711680),
            this.graphics.moveTo(this.pos0.x, this.pos0.y),
            this.graphics.quadraticCurveTo(
              0.75 * this.spriteAviator.x,
              this.canvas.height - this.margin,
              this.spriteAviator.x,
              this.spriteAviator.y
            ),
            this.graphics.lineStyle(0, 7280686),
            this.graphics.beginFill(7280686),
            this.graphics.moveTo(this.pos0.x, this.pos0.y),
            this.graphics.quadraticCurveTo(
              0.75 * this.spriteAviator.x,
              this.canvas.height - this.margin,
              this.spriteAviator.x + 3,
              this.spriteAviator.y
            ),
            this.graphics.lineTo(
              this.spriteAviator.x + 3,
              this.canvas.height - this.margin
            ),
            this.graphics.closePath(),
            this.graphics.endFill()));
      }
    }
  },
  fe = (e) => (u("data-v-c74a8080"), (e = e()), c(), e),
  be = { class: "flight-stage" },
  Se = fe(() =>
    s("canvas", { id: "pixi-canvas", class: "flight-scene" }, null, -1)
  ),
  ke = fe(() => s("div", { class: "flight-scene" }, null, -1)),
  Te = { key: 0, class: "chip-in" },
  Oe = fe(() =>
    s(
      "img",
      {
        class: "chip-in-propeller",
        src: "/assets/propeller-993cd447.svg",
        alt: "propeller"
      },
      null,
      -1
    )
  ),
  Re = ["value", "max"],
  Le = { key: 1, class: "flying" },
  Ae = { key: 2, class: "end-round" },
  Ie = { class: "end-round-title" },
  ve = { class: "end-round-cash-out" },
  Pe = { ref: "audioStart", src: "/sounds/start.mp3", preload: "none" },
  Ce = { ref: "audioFlewAway", src: "/sounds/flewaway.mp3", preload: "none" };
const xe = re(we, [
    [
      "render",
      function (e, t, n, r, u, c) {
        return (
          i(),
          a("div", be, [
            Se,
            ke,
            c.gameStatus === c.GroupStatus.ChipIn
              ? (i(),
                a("div", Te, [
                  Oe,
                  s("div", null, o(e.$t("WaitNextRound").toUpperCase()), 1),
                  s(
                    "progress",
                    {
                      value: u.gameManagerStore.remainingTime,
                      max: u.gameManagerStore.totalTime
                    },
                    null,
                    8,
                    Re
                  )
                ]))
              : c.gameStatus === c.GroupStatus.Flying
              ? (i(),
                a(
                  "div",
                  Le,
                  o(u.gameManagerStore.currentFlyingMultiplierStr),
                  1
                ))
              : c.gameStatus === c.GroupStatus.EndRound
              ? (i(),
                a("div", Ae, [
                  s("div", Ie, o(e.$t("FlewAway")), 1),
                  s(
                    "div",
                    ve,
                    o(u.gameManagerStore.currentFlewAwayMultiplier),
                    1
                  )
                ]))
              : l("", !0),
            s("audio", Pe, null, 512),
            s("audio", Ce, null, 512)
          ])
        );
      }
    ],
    ["__scopeId", "data-v-c74a8080"]
  ]),
  Me = {
    name: "NavTabs",
    props: {
      tabList: { type: Array, default: () => [] },
      defaultSelect: { type: Number, default: 0 },
      disabled: { type: Boolean, default: !1 }
    },
    data: () => ({ selectTab: -1 }),
    mounted() {
      (this.selectTab = this.defaultSelect),
        this.onSelectTab(this.tabList[this.selectTab]);
    },
    methods: {
      onSelectTab(e) {
        this.disabled ||
          ((this.selectTab = e.value),
          this.$emit("select-tab", this.selectTab));
      }
    }
  },
  je = ["onClick"];
const Ne = re(Me, [
  [
    "render",
    function (e, t, n, r, s, l) {
      return (
        i(),
        a(
          "div",
          { class: p(["nav-tabs", { "nav-tabs-disabled": n.disabled }]) },
          [
            (i(!0),
            a(
              d,
              null,
              m(
                n.tabList,
                (t, n) => (
                  i(),
                  a(
                    "div",
                    {
                      class: p([
                        "nav-tab-btn",
                        { "nav-tab-btn-active": s.selectTab === t.value }
                      ]),
                      onClick: (e) => l.onSelectTab(t),
                      key: n
                    },
                    o(e.$t(t.label)),
                    11,
                    je
                  )
                )
              ),
              128
            ))
          ],
          2
        )
      );
    }
  ],
  ["__scopeId", "data-v-0f08a808"]
]);
const Be = re(
    {
      name: "ESwitch",
      props: ["modelValue"],
      emits: ["update:modelValue"],
      methods: {
        onToggle() {
          this.$emit("update:modelValue", !this.modelValue);
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, o, l) {
          return (
            i(),
            a(
              "div",
              {
                class: p(["e-switch", { "e-switch-checked": n.modelValue }]),
                onClick:
                  t[0] || (t[0] = (...e) => l.onToggle && l.onToggle(...e))
              },
              [
                s(
                  "div",
                  {
                    class: p([
                      "e-switch-ball",
                      { "e-switch-ball-checked": n.modelValue }
                    ])
                  },
                  null,
                  2
                )
              ],
              2
            )
          );
        }
      ],
      ["__scopeId", "data-v-c3f7db72"]
    ]
  ),
  We = "/assets/sub-d275c2eb.svg",
  Ee = "/assets/add-6c84d2ba.svg",
  De = {
    name: "BetControl",
    components: { ESwitch: Be, NavTabs: Ne },
    props: { site: { type: Number, default: 0 } },
    watch: {
      currentFlyingMultiplier(e, t) {
        this.gameStatus === H.Flying &&
          this.isBet &&
          this.isAutoCashOut &&
          e > t &&
          e >= 100 * parseFloat(this.autoCashOutValue) &&
          this.handler.sendCashOutRequest(
            this.site,
            this.gameManagerStore.currentFlyingMultiplier,
            !0,
            this.gameManagerStore.pingTime,
            this.gameManagerStore.currentBetId
          );
      },
      gameStatus(e, t) {
        e === H.ChipIn &&
          this.isNextRound &&
          (this.gameManagerStore.setIsNextRound(this.site, !1),
          this.handler.sendGroupChipInRequest(this.site, this.chipValue));
      },
      autoPlay(e, t) {
        e > 0 && 0 === t && !this.isBet && this.onBet();
      },
      isBet(e, t) {
        if (!e && this.autoPlay > 0) {
          const e =
              0 === this.site
                ? this.gameManagerStore.autoPlayStartBalance0
                : this.gameManagerStore.autoPlayStartBalance1,
            t =
              (0 === this.site
                ? this.gameManagerStore.valueStopDecreases0
                : this.gameManagerStore.valueStopDecreases1) *
              this.playerStore.currencyRate,
            n =
              (0 === this.site
                ? this.gameManagerStore.valueStopIncreases0
                : this.gameManagerStore.valueStopIncreases1) *
              this.playerStore.currencyRate;
          if (t > 0 && this.playerStore.balance <= e - t)
            return void this.gameManagerStore.stopAutoPlay(this.site);
          if (n > 0 && this.playerStore.balance >= e + n)
            return void this.gameManagerStore.stopAutoPlay(this.site);
          this.onBet();
        }
      }
    },
    computed: {
      currentFlyingMultiplier() {
        return this.gameManagerStore.currentFlyingMultiplier;
      },
      autoPlay() {
        return 0 === this.site
          ? this.gameManagerStore.autoPlay0
          : this.gameManagerStore.autoPlay1;
      },
      showBetButton() {
        return (
          this.gameStatus === H.ChipIn || (!this.isBet && !this.isNextRound)
        );
      },
      showCashOutButton() {
        return this.gameStatus === H.Flying && this.isBet;
      },
      showCancelButton() {
        return this.gameStatus !== H.ChipIn && this.isNextRound;
      },
      chipValueList() {
        if (this.playerStore.currencyChipInSteps.length < 6) return [];
        const e = this.playerStore.currencyChipInSteps.slice(0, 6);
        return (
          e.forEach((t, n) => {
            e[n] = t / this.playerStore.currencyRate;
          }),
          e
        );
      },
      defaultChipValue() {
        return this.chipValueList[2];
      },
      handler() {
        return this.gameManagerStore.messageHandler;
      },
      gameStatus() {
        return this.gameManagerStore.currentGroupStatus;
      },
      ante() {
        return 0 === this.site
          ? this.gameManagerStore.ante0
          : this.gameManagerStore.ante1;
      },
      mask() {
        return 0 === this.site
          ? this.gameManagerStore.mask0
          : this.gameManagerStore.mask1;
      },
      isBet() {
        return 0 === this.site
          ? this.gameManagerStore.isBet0
          : this.gameManagerStore.isBet1;
      },
      isNextRound() {
        return 0 === this.site
          ? this.gameManagerStore.isNextRound0
          : this.gameManagerStore.isNextRound1;
      },
      chipValue() {
        return 0 === this.site
          ? this.gameManagerStore.chipValue0
          : this.gameManagerStore.chipValue1;
      }
    },
    mounted() {
      0 === this.chipValue &&
        this.gameManagerStore.setChipValue(
          this.site,
          this.defaultChipValue.toFixed(2)
        ),
        (this.isDisableChip = 1 === this.site);
    },
    data: () => ({
      playerStore: X(),
      gameManagerStore: ee(),
      selectTab: 0,
      tabList: [
        { value: 0, label: "Bet" },
        { value: 1, label: "Auto" }
      ],
      isDisableChip: !1,
      isAutoCashOut: !1,
      autoCashOutValue: "1.10"
    }),
    methods: {
      getCurrency(e) {
        return G(e, 2, this.playerStore.currencyRate);
      },
      onSelectTab(e) {
        this.selectTab = e;
      },
      onChipItemClick(e) {
        this.gameManagerStore.setChipValue(this.site, e.toFixed(2));
      },
      onAddChip() {
        const e = (
          parseFloat(this.chipValue) +
          this.defaultChipValue / 5
        ).toFixed(2);
        this.gameManagerStore.setChipValue(this.site, e);
      },
      onSubChip() {
        const e = parseFloat(this.chipValue) - this.defaultChipValue / 5;
        e > 0 && this.gameManagerStore.setChipValue(this.site, e.toFixed(2));
      },
      onBet() {
        this.site,
          this.gameStatus,
          this.chipValue,
          this.gameStatus === H.ChipIn
            ? this.handler.sendGroupChipInRequest(this.site, this.chipValue)
            : this.gameManagerStore.setIsNextRound(this.site, !0);
      },
      onCashOut() {
        this.handler.sendCashOutRequest(
          this.site,
          this.gameManagerStore.currentFlyingMultiplier,
          !1,
          this.gameManagerStore.pingTime,
          this.gameManagerStore.currentBetId
        );
      },
      onCancel() {
        this.gameManagerStore.setIsNextRound(this.site, !1),
          this.gameManagerStore.stopAutoPlay(this.site);
      },
      onInput(e) {
        const t = parseFloat(e.target.value);
        this.gameManagerStore.setChipValue(this.site, t);
      },
      onInputChange(e) {
        const t = parseFloat(e.target.value).toFixed(2);
        this.gameManagerStore.setChipValue(this.site, t);
      },
      onInputChangeAutoCashOut(e) {
        this.autoCashOutValue = parseFloat(e.target.value).toFixed(2);
      },
      onAutoPlay() {
        this.gameManagerStore.showAutoPlayOptions(!0, this.site);
      },
      onAutoPlayStop() {
        this.gameManagerStore.stopAutoPlay(this.site);
      }
    }
  },
  _e = (e) => (u("data-v-864e7260"), (e = e()), c(), e),
  He = { class: "bet-control-other" },
  Ve = [
    _e(() =>
      s(
        "img",
        {
          class: "bet-control-other-add-icon",
          src: "/assets/add2-1837c3d1.svg",
          alt: "add2"
        },
        null,
        -1
      )
    )
  ],
  Ge = [
    _e(() =>
      s(
        "img",
        {
          class: "bet-control-other-sub-icon",
          src: "/assets/sub2-ee0c2fda.svg",
          alt: "sub2"
        },
        null,
        -1
      )
    )
  ],
  qe = { class: "tab-view bet-panel" },
  Fe = { class: "bet-panel-chip" },
  Ue = { class: "bet-panel-chip-display" },
  Je = ["disabled", "value"],
  $e = { class: "bet-panel-chip-select" },
  ze = ["onClick", "disabled"],
  Xe = { class: "bet-panel-buttons" },
  Ye = { class: "bet-panel-btn-title" },
  Qe = { class: "bet-panel-btn-value" },
  Ke = { class: "bet-panel-btn-title" },
  Ze = { class: "bet-panel-btn-value" },
  et = { key: 2, class: "btn-cancel" },
  tt = { class: "btn-cancel-title" },
  nt = { class: "bet-panel-btn-title" },
  rt = { key: 0, class: "mask" },
  it = { key: 0, class: "separator" },
  at = { key: 1, class: "tab-view auto-panel" },
  st = { class: "auto-panel-text" },
  ot = ["disabled"];
const lt = { class: "bet-controls" };
const ut = re(
    {
      name: "BetControls",
      components: {
        BetControl: re(De, [
          [
            "render",
            function (e, t, n, r, u, c) {
              const h = g("NavTabs"),
                y = g("ESwitch");
              return (
                i(),
                a(
                  "div",
                  {
                    class: p([
                      "bet-control",
                      { "bet-control-active": c.isBet || c.isNextRound }
                    ])
                  },
                  [
                    A(
                      h,
                      {
                        style: { "margin-top": "0.5rem" },
                        "tab-list": u.tabList,
                        onSelectTab: c.onSelectTab,
                        disabled: u.isAutoCashOut || c.autoPlay > 0
                      },
                      null,
                      8,
                      ["tab-list", "onSelectTab", "disabled"]
                    ),
                    s("div", He, [
                      0 === n.site && !1 === u.gameManagerStore.isShowSite1
                        ? (i(),
                          a(
                            "div",
                            {
                              key: 0,
                              class: "bet-control-other-add",
                              onClick:
                                t[0] ||
                                (t[0] = (e) =>
                                  (u.gameManagerStore.isShowSite1 = !0))
                            },
                            Ve
                          ))
                        : l("", !0),
                      1 !== n.site ||
                      !u.gameManagerStore.isShowSite1 ||
                      c.isNextRound ||
                      c.isBet
                        ? l("", !0)
                        : (i(),
                          a(
                            "div",
                            {
                              key: 1,
                              class: "bet-control-other-sub",
                              onClick:
                                t[1] ||
                                (t[1] = (e) =>
                                  (u.gameManagerStore.isShowSite1 = !1))
                            },
                            Ge
                          ))
                    ]),
                    s("div", qe, [
                      s("div", Fe, [
                        s("div", Ue, [
                          s(
                            "img",
                            {
                              class: p(["icon", { "icon-disable": c.isBet }]),
                              src: We,
                              alt: "sub",
                              onClick:
                                t[2] ||
                                (t[2] = (...e) =>
                                  c.onSubChip && c.onSubChip(...e))
                            },
                            null,
                            2
                          ),
                          s(
                            "input",
                            {
                              disabled: c.isBet,
                              class: "bet-panel-chip-display-input",
                              value: c.chipValue,
                              type: "number",
                              onInput:
                                t[3] ||
                                (t[3] = (...e) => c.onInput && c.onInput(...e)),
                              onChange:
                                t[4] ||
                                (t[4] = (...e) =>
                                  c.onInputChange && c.onInputChange(...e))
                            },
                            null,
                            40,
                            Je
                          ),
                          s(
                            "img",
                            {
                              class: p(["icon", { "icon-disable": c.isBet }]),
                              src: Ee,
                              alt: "add",
                              onClick:
                                t[5] ||
                                (t[5] = (...e) =>
                                  c.onAddChip && c.onAddChip(...e))
                            },
                            null,
                            2
                          )
                        ]),
                        s("div", $e, [
                          (i(!0),
                          a(
                            d,
                            null,
                            m(
                              c.chipValueList,
                              (e, t) => (
                                i(),
                                a(
                                  "button",
                                  {
                                    key: t,
                                    class: "bet-panel-chip-select-item",
                                    onClick: (t) => c.onChipItemClick(e),
                                    disabled: c.isBet
                                  },
                                  o(e),
                                  9,
                                  ze
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ]),
                      s("div", Xe, [
                        c.showBetButton
                          ? (i(),
                            a(
                              "div",
                              {
                                key: 0,
                                class: p([
                                  "bet-panel-btn bet-panel-btn-bet",
                                  { "bet-panel-btn-bet-disable": c.isBet }
                                ]),
                                onClick:
                                  t[6] ||
                                  (t[6] = (...e) => c.onBet && c.onBet(...e))
                              },
                              [
                                s("div", Ye, o(e.$t("Bet").toUpperCase()), 1),
                                s("div", Qe, o(c.chipValue), 1)
                              ],
                              2
                            ))
                          : l("", !0),
                        c.showCashOutButton
                          ? (i(),
                            a(
                              "div",
                              {
                                key: 1,
                                class: "bet-panel-btn bet-panel-btn-cash-out",
                                onClick:
                                  t[7] ||
                                  (t[7] = (...e) =>
                                    c.onCashOut && c.onCashOut(...e))
                              },
                              [
                                s(
                                  "div",
                                  Ke,
                                  o(e.$t("CashOut").toUpperCase()),
                                  1
                                ),
                                s(
                                  "div",
                                  Ze,
                                  o(
                                    u.gameManagerStore
                                      .currentFlyingMultiplierStr
                                  ),
                                  1
                                )
                              ]
                            ))
                          : l("", !0),
                        c.showCancelButton
                          ? (i(),
                            a("div", et, [
                              s("div", tt, o(e.$t("WaitNextRound")), 1),
                              s(
                                "div",
                                {
                                  class: "bet-panel-btn bet-panel-btn-cancel",
                                  onClick:
                                    t[8] ||
                                    (t[8] = (...e) =>
                                      c.onCancel && c.onCancel(...e))
                                },
                                [
                                  s(
                                    "div",
                                    nt,
                                    o(e.$t("Cancel").toUpperCase()),
                                    1
                                  )
                                ]
                              )
                            ]))
                          : l("", !0)
                      ]),
                      c.mask ? (i(), a("div", rt)) : l("", !0)
                    ]),
                    1 === u.selectTab ? (i(), a("div", it)) : l("", !0),
                    1 === u.selectTab
                      ? (i(),
                        a("div", at, [
                          0 === c.autoPlay
                            ? (i(),
                              a(
                                "div",
                                {
                                  key: 0,
                                  class: "auto-panel-btn",
                                  onClick:
                                    t[9] ||
                                    (t[9] = (...e) =>
                                      c.onAutoPlay && c.onAutoPlay(...e))
                                },
                                o(e.$t("AutoPlay")),
                                1
                              ))
                            : (i(),
                              a(
                                "div",
                                {
                                  key: 1,
                                  class: "auto-panel-btn auto-panel-btn-stop",
                                  onClick:
                                    t[10] ||
                                    (t[10] = (...e) =>
                                      c.onAutoPlayStop &&
                                      c.onAutoPlayStop(...e))
                                },
                                o(e.$t("Stop")) + "(" + o(c.autoPlay) + ") ",
                                1
                              )),
                          s("div", st, o(e.$t("AutoCashOut")), 1),
                          A(
                            y,
                            {
                              style: { "margin-left": "0.3rem" },
                              modelValue: u.isAutoCashOut,
                              "onUpdate:modelValue":
                                t[11] || (t[11] = (e) => (u.isAutoCashOut = e))
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                          I(
                            s(
                              "input",
                              {
                                disabled: !u.isAutoCashOut,
                                class: "auto-panel-cash-out-input",
                                "onUpdate:modelValue":
                                  t[12] ||
                                  (t[12] = (e) => (u.autoCashOutValue = e)),
                                type: "number",
                                onChange:
                                  t[13] ||
                                  (t[13] = (...e) =>
                                    c.onInputChangeAutoCashOut &&
                                    c.onInputChangeAutoCashOut(...e))
                              },
                              null,
                              40,
                              ot
                            ),
                            [[v, u.autoCashOutValue]]
                          )
                        ]))
                      : l("", !0)
                  ],
                  2
                )
              );
            }
          ],
          ["__scopeId", "data-v-864e7260"]
        ])
      },
      data: () => ({ gameManagerStore: ee() })
    },
    [
      [
        "render",
        function (e, t, n, r, s, o) {
          const u = g("BetControl");
          return (
            i(),
            a("div", lt, [
              A(u, { style: { "margin-bottom": "0.3rem" }, site: 0 }),
              s.gameManagerStore.isShowSite1
                ? (i(), h(u, { key: 0, site: 1 }))
                : l("", !0)
            ])
          );
        }
      ],
      ["__scopeId", "data-v-8cddc115"]
    ]
  ),
  ct = { class: "history-panel" },
  pt = { class: "history-panel-title" },
  gt = { class: "history-panel-content" };
const dt = re(
    {
      name: "HistoryPanel",
      components: { FlewAwayMultiplier: me },
      data: () => ({ historyStore: Y() }),
      methods: {
        onExpand() {
          console.log("onExpand");
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, l, u) {
          const c = g("FlewAwayMultiplier");
          return (
            i(),
            a("div", ct, [
              s("div", pt, o(e.$t("RoundHistory")), 1),
              s("div", gt, [
                (i(!0),
                a(
                  d,
                  null,
                  m(
                    l.historyStore.histories,
                    (e, t) => (
                      i(),
                      h(
                        c,
                        {
                          style: { margin: "0 0.3rem 0.3rem 0" },
                          multiplier: e.multiplier,
                          key: t
                        },
                        null,
                        8,
                        ["multiplier"]
                      )
                    )
                  ),
                  128
                ))
              ])
            ])
          );
        }
      ],
      ["__scopeId", "data-v-7be45172"]
    ]
  ),
  mt = "/assets/timer-def6dcd9.svg",
  ht = "/assets/arrows-bottom-ac20c1b6.svg",
  yt = {
    name: "HistoryExpandButton",
    data: () => ({ historyStore: Y() }),
    methods: {
      onExpand() {
        console.log("onExpand"),
          (this.historyStore.showHistoryPanel = !this.historyStore
            .showHistoryPanel);
      }
    }
  },
  wt = ((e) => (u("data-v-d2f5dc3d"), (e = e()), c(), e))(() =>
    s(
      "img",
      { class: "history-expand-button-time", src: mt, alt: "history" },
      null,
      -1
    )
  ),
  ft = {
    key: 0,
    class: "history-expand-button-bottom",
    src: ht,
    alt: "history"
  },
  bt = { key: 1, class: "history-expand-button-top", src: ht, alt: "history" };
const St = { class: "game-scene" };
const kt = re(
    {
      name: "GameScene",
      components: {
        HistoryExpandButton: re(yt, [
          [
            "render",
            function (e, t, n, r, s, o) {
              return (
                i(),
                a(
                  "div",
                  {
                    class: "history-expand-button",
                    onClick:
                      t[0] || (t[0] = (...e) => o.onExpand && o.onExpand(...e))
                  },
                  [
                    wt,
                    s.historyStore.showHistoryPanel
                      ? l("", !0)
                      : (i(), a("img", ft)),
                    s.historyStore.showHistoryPanel
                      ? (i(), a("img", bt))
                      : l("", !0)
                  ]
                )
              );
            }
          ],
          ["__scopeId", "data-v-d2f5dc3d"]
        ]),
        HistoryPanel: dt,
        HistoryResult: ye,
        FlightStage: xe,
        BetControls: ut
      },
      mounted() {},
      data: () => ({ show: !1, playerStore: X(), historyStore: Y() }),
      computed: {},
      methods: {}
    },
    [
      [
        "render",
        function (e, t, n, r, s, o) {
          const u = g("HistoryResult"),
            c = g("FlightStage"),
            p = g("BetControls"),
            d = g("HistoryPanel"),
            m = g("HistoryExpandButton");
          return (
            i(),
            a("div", St, [
              A(u, { style: { "margin-right": "1rem" } }),
              A(c),
              A(p, { style: { "margin-top": "0.3rem" } }),
              s.historyStore.showHistoryPanel
                ? (i(), h(d, { key: 0, style: { "margin-right": "0.3rem" } }))
                : l("", !0),
              A(m, {
                style: { position: "absolute", right: "0.5rem", top: "0.3rem" }
              })
            ])
          );
        }
      ],
      ["__scopeId", "data-v-7d3dcfbe"]
    ]
  ),
  Tt = { name: "SplashPanel", components: {}, mounted() {}, data: () => ({}) },
  Ot = (e) => (u("data-v-bd45bd83"), (e = e()), c(), e),
  Rt = { class: "splash" },
  Lt = [
    Ot(() =>
      s(
        "img",
        { class: "logo", src: "/airplane/airplane1.svg", alt: "logo" },
        null,
        -1
      )
    ),
    Ot(() => s("img", { class: "logo-txt", src: ne, alt: "logo" }, null, -1)),
    Ot(() => s("div", { class: "tips" }, "Connection...", -1))
  ];
const At = re(Tt, [
    [
      "render",
      function (e, t, n, r, s, o) {
        return i(), a("div", Rt, Lt);
      }
    ],
    ["__scopeId", "data-v-bd45bd83"]
  ]),
  It = "/assets/close-f477c2ef.svg",
  vt = {
    name: "InfoBoards",
    components: { FlewAwayMultiplier: me, NavTabs: Ne },
    data: () => ({
      gameManagerStore: ee(),
      playerStore: X(),
      selectTab: 1,
      tabList: [
        { value: 0, label: "AllBets" },
        { value: 1, label: "MyBets" },
        { value: 2, label: "Top" }
      ],
      isPrevHand: !1,
      selectRankType: 1,
      selectRankTime: 0,
      rankTimeList: [
        { value: 0, label: "Rank.Day" },
        { value: 1, label: "Rank.Week" },
        { value: 2, label: "Rank.Month" },
        { value: 3, label: "Rank.Year" }
      ]
    }),
    computed: {
      totalAnte() {
        return this.allChipInList.reduce((e, t) => e + t.ante, 0);
      },
      allChipInList() {
        return this.isPrevHand
          ? this.gameManagerStore.prevChipInList
          : this.gameManagerStore.allChipInList;
      },
      myChipInList() {
        return this.gameManagerStore.myChipInList;
      },
      handler() {
        return this.gameManagerStore.messageHandler;
      },
      rankList() {
        return this.gameManagerStore.rankList &&
          0 !== this.gameManagerStore.rankList.length
          ? 0 === this.selectRankTime
            ? this.gameManagerStore.rankList.daily
            : 1 === this.selectRankTime
            ? this.gameManagerStore.rankList.weekly
            : 2 === this.selectRankTime
            ? this.gameManagerStore.rankList.monthly
            : 3 === this.selectRankTime
            ? this.gameManagerStore.rankList.yearly
            : []
          : [];
      }
    },
    methods: {
      getTime(e) {
        const t = new Date(e);
        return `${t.getHours()}:${t.getMinutes()}`;
      },
      getCurrency(e) {
        return G(e, 2, this.playerStore.currencyRate);
      },
      onSelectTab(e) {
        (this.selectTab = e),
          0 === this.selectTab
            ? (this.isPrevHand = !1)
            : 2 === this.selectTab &&
              this.onSelectRankType(
                $.RankListRequest.RankType.RankTypeCashOutMultiplier
              );
      },
      onOpenPreviousHand() {
        this.isPrevHand = !this.isPrevHand;
      },
      onSelectRankType(e) {
        (this.selectRankType = e), this.handler.sendRankListRequest(e);
      },
      onSelectRankTime(e) {
        this.selectRankTime = e;
      }
    }
  },
  Pt = { class: "info-boards" },
  Ct = { key: 0, class: "tab-view" },
  xt = { class: "all-bets" },
  Mt = { class: "all-bets-info" },
  jt = { class: "all-bets-info-title" },
  Nt = { class: "all-bets-info-all" },
  Bt = { class: "all-bets-flew-away" },
  Wt = { key: 0, class: "all-bets-prev-icon", src: It, alt: "prev hand" },
  Et = { key: 1, class: "all-bets-prev-icon", src: mt, alt: "prev hand" },
  Dt = { class: "all-bets-prev-text" },
  _t = ((e) => (u("data-v-4540e2ae"), (e = e()), c(), e))(() =>
    s("div", { class: "slicer" }, null, -1)
  ),
  Ht = { class: "chip-in-list" },
  Vt = { class: "chip-in-list-header" },
  Gt = { class: "chip-in-list-header-user" },
  qt = { class: "chip-in-list-header-bet" },
  Ft = { class: "chip-in-list-header-multiplier" },
  Ut = { class: "chip-in-list-header-cash-out" },
  Jt = { class: "chip-in-item-user" },
  $t = { class: "chip-in-item-bet" },
  zt = { class: "chip-in-item-multiplier" },
  Xt = { class: "chip-in-item-cash-out" },
  Yt = { key: 0 },
  Qt = { key: 1, class: "tab-view" },
  Kt = { class: "chip-in-list" },
  Zt = { class: "chip-in-list-header" },
  en = { class: "chip-in-list-header-user" },
  tn = { class: "chip-in-list-header-bet" },
  nn = { class: "chip-in-list-header-multiplier" },
  rn = { class: "chip-in-list-header-cash-out" },
  an = { class: "chip-in-item-user" },
  sn = { class: "chip-in-item-bet" },
  on = { class: "chip-in-item-multiplier" },
  ln = { class: "chip-in-item-cash-out" },
  un = { key: 0 },
  cn = { key: 2, class: "tab-view" },
  pn = { class: "rank-content" },
  gn = { class: "rank-type-list" },
  dn = { class: "rank-content-list" },
  mn = { class: "chip-in-list" },
  hn = { class: "chip-in-list-header" },
  yn = { key: 0, class: "chip-in-list-header-user", style: { width: "30%" } },
  wn = { class: "chip-in-list-header-multiplier", style: { width: "30%" } },
  fn = {
    key: 1,
    class: "chip-in-list-header-cash-out",
    style: { width: "40%" }
  },
  bn = { key: 0, class: "chip-in-item-user", style: { width: "30%" } },
  Sn = { class: "chip-in-item-multiplier", style: { width: "30%" } },
  kn = { key: 1, class: "chip-in-item-cash-out", style: { width: "40%" } },
  Tn = { key: 0 };
const On = re(vt, [
    [
      "render",
      function (e, t, n, r, u, c) {
        const y = g("NavTabs"),
          w = g("FlewAwayMultiplier");
        return (
          i(),
          a("div", Pt, [
            A(
              y,
              {
                style: { "margin-top": "0.5rem" },
                "tab-list": u.tabList,
                onSelectTab: c.onSelectTab
              },
              null,
              8,
              ["tab-list", "onSelectTab"]
            ),
            0 === u.selectTab
              ? (i(),
                a("div", Ct, [
                  s("div", xt, [
                    s("div", Mt, [
                      s("div", jt, o(e.$t("AllBets").toUpperCase()), 1),
                      s("div", Nt, o(c.getCurrency(c.totalAnte)), 1)
                    ]),
                    s("div", Bt, [
                      u.isPrevHand &&
                      u.gameManagerStore.preFlewAwayMultiplier > 0
                        ? (i(),
                          h(
                            w,
                            {
                              key: 0,
                              multiplier:
                                u.gameManagerStore.preFlewAwayMultiplier
                            },
                            null,
                            8,
                            ["multiplier"]
                          ))
                        : l("", !0)
                    ]),
                    s(
                      "div",
                      {
                        class: p([
                          "all-bets-prev",
                          { "all-bets-prev-active": u.isPrevHand }
                        ]),
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            c.onOpenPreviousHand && c.onOpenPreviousHand(...e))
                      },
                      [
                        u.isPrevHand
                          ? (i(), a("img", Wt))
                          : (i(), a("img", Et)),
                        s("div", Dt, o(e.$t("PrevHand")), 1)
                      ],
                      2
                    )
                  ]),
                  _t,
                  s("div", Ht, [
                    s("div", Vt, [
                      s("div", Gt, "  " + o(e.$t("User")), 1),
                      s("div", qt, o(e.$t("Bet")) + " ", 1),
                      s("div", Ft, "  " + o(e.$t("Multiplier")), 1),
                      s("div", Ut, o(e.$t("CashOut")) + "  ", 1)
                    ]),
                    (i(!0),
                    a(
                      d,
                      null,
                      m(
                        c.allChipInList,
                        (e, t) => (
                          i(),
                          a(
                            "div",
                            {
                              class: p([
                                "chip-in-item",
                                { "chip-in-item-active": 0 !== e.multiplier }
                              ]),
                              key: t
                            },
                            [
                              s("div", Jt, "  " + o(e.nickName), 1),
                              s("div", $t, o(c.getCurrency(e.ante)) + " ", 1),
                              s("div", zt, [
                                0 !== e.multiplier
                                  ? (i(),
                                    h(
                                      w,
                                      {
                                        key: 0,
                                        style: { "margin-left": "0.5rem" },
                                        multiplier: e.multiplier
                                      },
                                      null,
                                      8,
                                      ["multiplier"]
                                    ))
                                  : l("", !0)
                              ]),
                              s("div", Xt, [
                                0 !== e.award
                                  ? (i(),
                                    a("span", Yt, o(c.getCurrency(e.award)), 1))
                                  : l("", !0),
                                P("   ")
                              ])
                            ],
                            2
                          )
                        )
                      ),
                      128
                    ))
                  ])
                ]))
              : l("", !0),
            1 === u.selectTab
              ? (i(),
                a("div", Qt, [
                  s("div", Kt, [
                    s("div", Zt, [
                      s("div", en, "  " + o(e.$t("Date")), 1),
                      s("div", tn, o(e.$t("Bet")) + " ", 1),
                      s("div", nn, "  " + o(e.$t("Multiplier")), 1),
                      s("div", rn, o(e.$t("CashOut")) + "  ", 1)
                    ]),
                    (i(!0),
                    a(
                      d,
                      null,
                      m(
                        c.myChipInList,
                        (e, t) => (
                          i(),
                          a(
                            "div",
                            {
                              class: p([
                                "chip-in-item",
                                {
                                  "chip-in-item-active":
                                    0 !== e.chipIn.multiplier
                                }
                              ]),
                              key: t
                            },
                            [
                              s("div", an, "  " + o(c.getTime(e.timestamp)), 1),
                              s(
                                "div",
                                sn,
                                o(c.getCurrency(e.chipIn.ante)) + " ",
                                1
                              ),
                              s("div", on, [
                                0 !== e.chipIn.multiplier
                                  ? (i(),
                                    h(
                                      w,
                                      {
                                        key: 0,
                                        style: { "margin-left": "0.5rem" },
                                        multiplier: e.chipIn.multiplier
                                      },
                                      null,
                                      8,
                                      ["multiplier"]
                                    ))
                                  : l("", !0)
                              ]),
                              s("div", ln, [
                                0 !== e.chipIn.award
                                  ? (i(),
                                    a(
                                      "span",
                                      un,
                                      o(c.getCurrency(e.chipIn.award)),
                                      1
                                    ))
                                  : l("", !0),
                                P("   ")
                              ])
                            ],
                            2
                          )
                        )
                      ),
                      128
                    ))
                  ])
                ]))
              : l("", !0),
            2 === u.selectTab
              ? (i(),
                a("div", cn, [
                  s("div", pn, [
                    s("div", gn, [
                      s(
                        "div",
                        {
                          class: p([
                            "rank-type-item",
                            { "rank-type-item-active": 1 === u.selectRankType }
                          ]),
                          onClick: t[1] || (t[1] = (e) => c.onSelectRankType(1))
                        },
                        o(e.$t("Rank.HugeWins")),
                        3
                      ),
                      s(
                        "div",
                        {
                          class: p([
                            "rank-type-item",
                            { "rank-type-item-active": 2 === u.selectRankType }
                          ]),
                          onClick: t[2] || (t[2] = (e) => c.onSelectRankType(2))
                        },
                        o(e.$t("Rank.BiggestWins")),
                        3
                      ),
                      s(
                        "div",
                        {
                          class: p([
                            "rank-type-item",
                            { "rank-type-item-active": 0 === u.selectRankType }
                          ]),
                          onClick: t[3] || (t[3] = (e) => c.onSelectRankType(0))
                        },
                        o(e.$t("Rank.Multipliers")),
                        3
                      )
                    ]),
                    A(
                      y,
                      {
                        style: { "margin-top": "0.5rem" },
                        "tab-list": u.rankTimeList,
                        onSelectTab: c.onSelectRankTime
                      },
                      null,
                      8,
                      ["tab-list", "onSelectTab"]
                    ),
                    s("div", dn, [
                      s("div", mn, [
                        s("div", hn, [
                          0 !== u.selectRankType
                            ? (i(), a("div", yn, "   " + o(e.$t("User")), 1))
                            : l("", !0),
                          s("div", wn, "    " + o(e.$t("Multiplier")), 1),
                          0 !== u.selectRankType
                            ? (i(), a("div", fn, o(e.$t("CashOut")) + "   ", 1))
                            : l("", !0)
                        ]),
                        (i(!0),
                        a(
                          d,
                          null,
                          m(
                            c.rankList,
                            (e, t) => (
                              i(),
                              a("div", { class: "chip-in-item", key: t }, [
                                0 !== u.selectRankType
                                  ? (i(),
                                    a("div", bn, "   " + o(e.nickname), 1))
                                  : l("", !0),
                                s("div", Sn, [
                                  0 !== e.multiplier
                                    ? (i(),
                                      h(
                                        w,
                                        {
                                          key: 0,
                                          style: { "margin-left": "0.5rem" },
                                          multiplier: e.multiplier
                                        },
                                        null,
                                        8,
                                        ["multiplier"]
                                      ))
                                    : l("", !0)
                                ]),
                                0 !== u.selectRankType
                                  ? (i(),
                                    a("div", kn, [
                                      0 !== e.score
                                        ? (i(),
                                          a(
                                            "span",
                                            Tn,
                                            o(c.getCurrency(e.score)),
                                            1
                                          ))
                                        : l("", !0),
                                      P("   ")
                                    ]))
                                  : l("", !0)
                              ])
                            )
                          ),
                          128
                        ))
                      ])
                    ])
                  ])
                ]))
              : l("", !0)
          ])
        );
      }
    ],
    ["__scopeId", "data-v-4540e2ae"]
  ]),
  Rn = { class: "win-message" },
  Ln = { class: "win-item-multiplier" },
  An = { class: "win-item-multiplier-title" },
  In = { class: "win-item-multiplier-value" },
  vn = { class: "win-item-award" },
  Pn = { class: "win-item-award-title" },
  Cn = { class: "win-item-award-value" };
const xn = re(
    {
      name: "WinMessage",
      data: () => ({ gameManagerStore: ee(), playerStore: X() }),
      computed: {
        winList() {
          return this.gameManagerStore.winMessageList;
        }
      },
      methods: {
        getCurrency(e) {
          return G(e, 2, this.playerStore.currencyRate);
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, l, u) {
          return (
            i(),
            a("div", Rn, [
              (i(!0),
              a(
                d,
                null,
                m(
                  u.winList,
                  (t, n) => (
                    i(),
                    a("div", { class: "win-item", key: n }, [
                      s("div", Ln, [
                        s("div", An, o(e.$t("WinInfo")), 1),
                        s(
                          "div",
                          In,
                          o((t.multiplier / 100).toFixed(2)) + "x",
                          1
                        )
                      ]),
                      s("div", vn, [
                        s("div", Pn, o(e.$t("Win")), 1),
                        s("div", Cn, o(u.getCurrency(t.award)), 1)
                      ])
                    ])
                  )
                ),
                128
              ))
            ])
          );
        }
      ],
      ["__scopeId", "data-v-ff1c6f77"]
    ]
  ),
  Mn = { class: "auto-play-options" },
  jn = { class: "auto-play-content" },
  Nn = { class: "auto-play-header" },
  Bn = { class: "auto-play-header-title" },
  Wn = { class: "auto-play-main" },
  En = { key: 0, class: "auto-play-main-error" },
  Dn = { class: "auto-play-main-error-message" },
  _n = { class: "auto-play-main-number" },
  Hn = { class: "auto-play-main-number-title" },
  Vn = { class: "auto-play-main-number-list" },
  Gn = ["onClick"],
  qn = { class: "auto-play-main-item" },
  Fn = { class: "auto-play-main-item-value" },
  Un = ["disabled"],
  Jn = { class: "auto-play-main-item" },
  $n = { class: "auto-play-main-item-value" },
  zn = ["disabled"],
  Xn = { class: "auto-play-main-item" },
  Yn = { class: "auto-play-main-item-value" },
  Qn = ["disabled"],
  Kn = { class: "auto-play-footer" };
const Zn = re(
    {
      name: "AutoPlayOptions",
      components: { ESwitch: Be },
      props: { site: { type: Number, default: 0 } },
      data: () => ({
        gameManagerStore: ee(),
        isStopDecreases: !1,
        isStopIncreases: !1,
        isStopSingleWin: !1,
        valueStopDecreases: "0.00",
        valueStopIncreases: "0.00",
        valueStopSingleWin: "0.00",
        autoPlayNumber: [10, 20, 50, 100],
        selectAutoPlayNumber: 0,
        isShowError: !1,
        errorMessage: ""
      }),
      computed: {
        stepValue() {
          const e = X();
          return 0 === e.currencyChipInSteps.length
            ? 0.1
            : e.currencyChipInSteps[0] / e.currencyRate;
        }
      },
      methods: {
        onClose() {
          this.gameManagerStore.showAutoPlayOptions(!1);
        },
        onReset() {
          (this.selectAutoPlayNumber = 0),
            (this.isStopDecreases = !1),
            (this.isStopIncreases = !1),
            (this.isStopSingleWin = !1),
            (this.valueStopDecreases = "0.00"),
            (this.valueStopIncreases = "0.00"),
            (this.valueStopSingleWin = "0.00"),
            (this.isShowError = !1);
        },
        onStart() {
          if (0 === this.selectAutoPlayNumber)
            return (
              (this.isShowError = !0),
              void (this.errorMessage = this.$t(
                "AutoPlayOptions.ErrorSetNumberOfRounds"
              ))
            );
          if (
            !this.isStopDecreases &&
            !this.isStopIncreases &&
            !this.isStopSingleWin
          )
            return (
              (this.isShowError = !0),
              void (this.errorMessage = this.$t(
                "AutoPlayOptions.ErrorStopPoint"
              ))
            );
          const e = parseFloat(this.valueStopDecreases),
            t = parseFloat(this.valueStopIncreases),
            n = parseFloat(this.valueStopSingleWin);
          if (
            (this.isStopDecreases && e <= 0) ||
            (this.isStopIncreases && t <= 0) ||
            (this.isStopSingleWin && n <= 0)
          )
            return (
              (this.isShowError = !0),
              void (this.errorMessage = this.$t(
                "AutoPlayOptions.ErrorCanNotZero"
              ))
            );
          this.gameManagerStore.startAutoPlay(
            this.site,
            this.selectAutoPlayNumber,
            e,
            t,
            n
          ),
            this.gameManagerStore.showAutoPlayOptions(!1);
        },
        onInputChangeStopDecreases(e) {
          this.valueStopDecreases = parseFloat(e.target.value).toFixed(2);
        },
        onSubStopDecreases() {
          const e = (
            parseFloat(this.valueStopDecreases) - this.stepValue
          ).toFixed(2);
          e > 0 && (this.valueStopDecreases = e);
        },
        onAddStopDecreases() {
          this.valueStopDecreases = (
            parseFloat(this.valueStopDecreases) + this.stepValue
          ).toFixed(2);
        },
        onInputChangeStopIncreases(e) {
          this.valueStopIncreases = parseFloat(e.target.value).toFixed(2);
        },
        onSubStopIncreases() {
          const e = (
            parseFloat(this.valueStopIncreases) - this.stepValue
          ).toFixed(2);
          e > 0 && (this.valueStopIncreases = e);
        },
        onAddStopIncreases() {
          this.valueStopIncreases = (
            parseFloat(this.valueStopIncreases) + this.stepValue
          ).toFixed(2);
        },
        onInputChangeStopSingleWin(e) {
          this.valueStopSingleWin = parseFloat(e.target.value).toFixed(2);
        },
        onSubStopSingleWin() {
          const e = (
            parseFloat(this.valueStopSingleWin) - this.stepValue
          ).toFixed(2);
          e > 0 && (this.valueStopSingleWin = e);
        },
        onAddStopSingleWin() {
          this.valueStopSingleWin = (
            parseFloat(this.valueStopSingleWin) + this.stepValue
          ).toFixed(2);
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, u, c) {
          const h = g("ESwitch");
          return (
            i(),
            a("div", Mn, [
              s("div", {
                class: "mask",
                onClick: t[0] || (t[0] = (...e) => c.onClose && c.onClose(...e))
              }),
              s("div", jn, [
                s("div", Nn, [
                  s("div", Bn, o(e.$t("AutoPlayOptions.Title")), 1),
                  s("img", {
                    class: "auto-play-header-close",
                    src: It,
                    alt: "close",
                    onClick:
                      t[1] || (t[1] = (...e) => c.onClose && c.onClose(...e))
                  })
                ]),
                s("div", Wn, [
                  u.isShowError
                    ? (i(),
                      a("div", En, [
                        s("div", Dn, o(u.errorMessage), 1),
                        s("img", {
                          class: "auto-play-main-error-close",
                          src: It,
                          alt: "close",
                          onClick: t[2] || (t[2] = (e) => (u.isShowError = !1))
                        })
                      ]))
                    : l("", !0),
                  s("div", _n, [
                    s("div", Hn, o(e.$t("AutoPlayOptions.NumberOfRounds")), 1),
                    s("div", Vn, [
                      (i(!0),
                      a(
                        d,
                        null,
                        m(
                          u.autoPlayNumber,
                          (e, t) => (
                            i(),
                            a(
                              "div",
                              {
                                class: p([
                                  "auto-play-main-number-item",
                                  {
                                    "auto-play-main-number-item-active":
                                      e === u.selectAutoPlayNumber
                                  }
                                ]),
                                key: t,
                                onClick: (t) => (u.selectAutoPlayNumber = e)
                              },
                              o(e),
                              11,
                              Gn
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  ]),
                  s("div", qn, [
                    A(
                      h,
                      {
                        modelValue: u.isStopDecreases,
                        "onUpdate:modelValue":
                          t[3] || (t[3] = (e) => (u.isStopDecreases = e))
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    s(
                      "div",
                      {
                        class: p([
                          "auto-play-main-item-title",
                          {
                            "auto-play-main-item-title-active":
                              u.isStopDecreases
                          }
                        ])
                      },
                      o(e.$t("AutoPlayOptions.StopIfCashDecreasesBy")),
                      3
                    ),
                    s("div", Fn, [
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopDecreases }
                          ]),
                          src: We,
                          alt: "sub",
                          onClick:
                            t[4] ||
                            (t[4] = (...e) =>
                              c.onSubStopDecreases &&
                              c.onSubStopDecreases(...e))
                        },
                        null,
                        2
                      ),
                      I(
                        s(
                          "input",
                          {
                            disabled: !u.isStopDecreases,
                            class: "auto-play-main-item-value-input",
                            "onUpdate:modelValue":
                              t[5] ||
                              (t[5] = (e) => (u.valueStopDecreases = e)),
                            type: "number",
                            onChange:
                              t[6] ||
                              (t[6] = (...e) =>
                                c.onInputChangeStopDecreases &&
                                c.onInputChangeStopDecreases(...e))
                          },
                          null,
                          40,
                          Un
                        ),
                        [[v, u.valueStopDecreases]]
                      ),
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopDecreases }
                          ]),
                          src: Ee,
                          alt: "add",
                          onClick:
                            t[7] ||
                            (t[7] = (...e) =>
                              c.onAddStopDecreases &&
                              c.onAddStopDecreases(...e))
                        },
                        null,
                        2
                      )
                    ])
                  ]),
                  s("div", Jn, [
                    A(
                      h,
                      {
                        modelValue: u.isStopIncreases,
                        "onUpdate:modelValue":
                          t[8] || (t[8] = (e) => (u.isStopIncreases = e))
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    s(
                      "div",
                      {
                        class: p([
                          "auto-play-main-item-title",
                          {
                            "auto-play-main-item-title-active":
                              u.isStopIncreases
                          }
                        ])
                      },
                      o(e.$t("AutoPlayOptions.StopIfCashIncreasesBy")),
                      3
                    ),
                    s("div", $n, [
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopIncreases }
                          ]),
                          src: We,
                          alt: "sub",
                          onClick:
                            t[9] ||
                            (t[9] = (...e) =>
                              c.onSubStopIncreases &&
                              c.onSubStopIncreases(...e))
                        },
                        null,
                        2
                      ),
                      I(
                        s(
                          "input",
                          {
                            disabled: !u.isStopIncreases,
                            class: "auto-play-main-item-value-input",
                            "onUpdate:modelValue":
                              t[10] ||
                              (t[10] = (e) => (u.valueStopIncreases = e)),
                            type: "number",
                            onChange:
                              t[11] ||
                              (t[11] = (...e) =>
                                c.onInputChangeStopIncreases &&
                                c.onInputChangeStopIncreases(...e))
                          },
                          null,
                          40,
                          zn
                        ),
                        [[v, u.valueStopIncreases]]
                      ),
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopIncreases }
                          ]),
                          src: Ee,
                          alt: "add",
                          onClick:
                            t[12] ||
                            (t[12] = (...e) =>
                              c.onAddStopIncreases &&
                              c.onAddStopIncreases(...e))
                        },
                        null,
                        2
                      )
                    ])
                  ]),
                  s("div", Xn, [
                    A(
                      h,
                      {
                        modelValue: u.isStopSingleWin,
                        "onUpdate:modelValue":
                          t[13] || (t[13] = (e) => (u.isStopSingleWin = e))
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    s(
                      "div",
                      {
                        class: p([
                          "auto-play-main-item-title",
                          {
                            "auto-play-main-item-title-active":
                              u.isStopSingleWin
                          }
                        ])
                      },
                      o(e.$t("AutoPlayOptions.StopIfSingleWinExceeds")),
                      3
                    ),
                    s("div", Yn, [
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopSingleWin }
                          ]),
                          src: We,
                          alt: "sub",
                          onClick:
                            t[14] ||
                            (t[14] = (...e) =>
                              c.onSubStopSingleWin &&
                              c.onSubStopSingleWin(...e))
                        },
                        null,
                        2
                      ),
                      I(
                        s(
                          "input",
                          {
                            disabled: !u.isStopSingleWin,
                            class: "auto-play-main-item-value-input",
                            "onUpdate:modelValue":
                              t[15] ||
                              (t[15] = (e) => (u.valueStopSingleWin = e)),
                            type: "number",
                            onChange:
                              t[16] ||
                              (t[16] = (...e) =>
                                c.onInputChangeStopSingleWin &&
                                c.onInputChangeStopSingleWin(...e))
                          },
                          null,
                          40,
                          Qn
                        ),
                        [[v, u.valueStopSingleWin]]
                      ),
                      s(
                        "img",
                        {
                          class: p([
                            "icon",
                            { "icon-disable": !u.isStopSingleWin }
                          ]),
                          src: Ee,
                          alt: "add",
                          onClick:
                            t[17] ||
                            (t[17] = (...e) =>
                              c.onAddStopSingleWin &&
                              c.onAddStopSingleWin(...e))
                        },
                        null,
                        2
                      )
                    ])
                  ])
                ]),
                s("div", Kn, [
                  s(
                    "div",
                    {
                      class: "auto-play-btn-reset",
                      onClick:
                        t[18] ||
                        (t[18] = (...e) => c.onReset && c.onReset(...e))
                    },
                    o(e.$t("AutoPlayOptions.Reset")),
                    1
                  ),
                  s(
                    "div",
                    {
                      class: "auto-play-btn-start",
                      onClick:
                        t[19] ||
                        (t[19] = (...e) => c.onStart && c.onStart(...e))
                    },
                    o(e.$t("AutoPlayOptions.Start")),
                    1
                  )
                ])
              ])
            ])
          );
        }
      ],
      ["__scopeId", "data-v-fbf2b205"]
    ]
  ),
  er = {
    name: "EPopup",
    props: {
      modelValue: { type: Boolean, default: !1 },
      clickMaskNoClose: { type: Boolean, default: !1 },
      maskOpacity: { type: Number, default: 0.4 }
    },
    emits: ["update:modelValue", "close"],
    data: () => ({}),
    methods: {
      onClose() {
        this.clickMaskNoClose ||
          (this.$emit("update:modelValue", !this.modelValue),
          this.$emit("close"));
      }
    }
  },
  tr = { key: 0, class: "e-popup" },
  nr = { class: "e-popup-content" };
const rr = re(er, [
    [
      "render",
      function (e, t, n, r, o, u) {
        return n.modelValue
          ? (i(),
            a("div", tr, [
              s(
                "div",
                {
                  class: "mask",
                  style: C({ opacity: n.maskOpacity }),
                  onClick:
                    t[0] || (t[0] = (...e) => u.onClose && u.onClose(...e))
                },
                null,
                4
              ),
              s("div", nr, [x(e.$slots, "default", {}, void 0, !0)])
            ]))
          : l("", !0);
      }
    ],
    ["__scopeId", "data-v-9a351ce9"]
  ]),
  ir = { class: "weekly-award" },
  ar = { class: "weekly-award-header" },
  sr = { class: "weekly-award-header-title" },
  or = { class: "weekly-award-content" },
  lr = { key: 0, class: "weekly-award-content-tab" },
  ur = { class: "info-text" },
  cr = ["innerHTML"],
  pr = ["innerHTML"],
  gr = ["innerHTML"],
  dr = { class: "ranking-list" },
  mr = { class: "ranking-list-header" },
  hr = { class: "ranking-list-header-rank" },
  yr = { class: "ranking-list-header-bonus" },
  wr = { class: "ranking-list-header-user" },
  fr = { class: "ranking-list-header-score" },
  br = { class: "ranking-item-rank" },
  Sr = { class: "ranking-item-bonus" },
  kr = { class: "ranking-item-user" },
  Tr = { class: "ranking-item-score" },
  Or = { key: 1, class: "weekly-award-content-tab" },
  Rr = ["innerHTML"],
  Lr = ["innerHTML"],
  Ar = ["innerHTML"],
  Ir = ["innerHTML"],
  vr = { class: "ranking-list" },
  Pr = { class: "ranking-list-header" },
  Cr = { class: "ranking-list-header-rank" },
  xr = { class: "ranking-list-header-bonus" },
  Mr = { class: "ranking-list-header-user" },
  jr = { class: "ranking-list-header-score" },
  Nr = { class: "ranking-item-rank" },
  Br = { class: "ranking-item-bonus" },
  Wr = { class: "ranking-item-user" },
  Er = { class: "ranking-item-score" },
  Dr = { class: "weekly-award-footer" },
  _r = {
    key: 0,
    class: "ranking-list",
    style: { height: "auto", "margin-bottom": "1rem", padding: "0 0.5rem" }
  },
  Hr = { class: "ranking-item ranking-item-active" },
  Vr = { class: "ranking-item-rank" },
  Gr = { class: "ranking-item-bonus" },
  qr = { class: "ranking-item-user" },
  Fr = { class: "ranking-item-score" };
const Ur = re(
    {
      name: "WeeklyAward",
      components: { NavTabs: Ne },
      data() {
        return {
          gameManagerStore: ee(),
          playerStore: X(),
          selectTab: 0,
          tabList: [
            { value: 0, label: this.$t("WeeklyAward.CurrentWeek") },
            { value: 1, label: this.$t("WeeklyAward.LastWeek") }
          ],
          settlementTime: 0,
          intervalId: null,
          dialog: !0
        };
      },
      mounted() {
        (this.settlementTime = this.weeklyTopReward.timestamp),
          (this.intervalId = setInterval(() => {
            this.settlementTime--;
          }, 1e3)),
          this.gameManagerStore.messageHandler.sendWeeklyTopRewardRequest();
      },
      unmounted() {
        clearInterval(this.intervalId);
      },
      computed: {
        defaultTab() {
          return 0 === this.weeklyTopReward.lastWeekStatus ? 1 : 0;
        },
        settlementTimeStr() {
          const e = new Date().getTime(),
            t = this.settlementTime;
          let n = Math.round(Math.abs(t - e) / 1e3);
          const r = Math.floor(n / 86400);
          n -= 86400 * r;
          const i = Math.floor(n / 3600);
          n -= 3600 * i;
          const a = Math.floor(n / 60);
          return (
            (n -= 60 * a),
            e > t || (0 === r && 0 === i && 0 === a && 0 === n)
              ? this.getCountdownString(0, 0, 0, 0)
              : this.getCountdownString(r, i, a, n)
          );
        },
        isInRanking() {
          const e = this.weeklyTopReward.currentWeekOneSelf.top;
          return !(0 === e || e > this.numberOfRewards);
        },
        youTop() {
          const e = this.weeklyTopReward.currentWeekOneSelf.top;
          return e > 0 ? e : "-";
        },
        numberOfRewards() {
          return this.weeklyTopReward.numberOfRewards;
        },
        weeklyTopReward() {
          return this.gameManagerStore.respWeeklyTopReward;
        },
        currentWeek() {
          return this.weeklyTopReward.currentWeek;
        },
        lastWeek() {
          return this.weeklyTopReward.lastWeek;
        },
        lastWeekYouTop() {
          const e = this.weeklyTopReward.lastWeek.findIndex(
            (e) => e.uid === this.playerStore.uid
          );
          return -1 === e ? "-" : this.weeklyTopReward.lastWeek[e].top;
        },
        currentWeekOneSelf() {
          return this.weeklyTopReward.currentWeekOneSelf;
        }
      },
      methods: {
        getCurrency(e) {
          return G(e, 0, this.playerStore.currencyRate);
        },
        getCountdownString(e, t, n, r) {
          return `${e}d ${this.getNumber2(t)}:${this.getNumber2(
            n
          )}:${this.getNumber2(r)}`;
        },
        getNumber2: (e) => (e < 10 ? `0${e}` : e.toString()),
        onClose() {
          this.gameManagerStore.isShowWeeklyAward = !1;
        },
        onSelectTab(e) {
          this.selectTab = e;
        },
        onGetBonus() {
          this.gameManagerStore.messageHandler.sendTakeWeeklyTopRewardRequest();
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, u, c) {
          const h = g("NavTabs");
          return (
            i(),
            a("div", ir, [
              s("div", ar, [
                s("div", sr, o(e.$t("WeeklyAward.Title")), 1),
                s("img", {
                  class: "weekly-award-header-close",
                  src: It,
                  alt: "close",
                  onClick:
                    t[0] || (t[0] = (...e) => c.onClose && c.onClose(...e))
                })
              ]),
              s("div", or, [
                A(
                  h,
                  {
                    "tab-list": u.tabList,
                    "default-select": c.defaultTab,
                    onSelectTab: c.onSelectTab
                  },
                  null,
                  8,
                  ["tab-list", "default-select", "onSelectTab"]
                ),
                0 === u.selectTab
                  ? (i(),
                    a("div", lr, [
                      s(
                        "div",
                        ur,
                        o(
                          e.$t("WeeklyAward.SettlementTime", {
                            time: c.settlementTimeStr
                          })
                        ),
                        1
                      ),
                      s(
                        "div",
                        {
                          class: "info-text",
                          innerHTML: e.$t("WeeklyAward.CurrentWeekInfo", {
                            numberOfRewards: c.numberOfRewards
                          })
                        },
                        null,
                        8,
                        cr
                      ),
                      c.isInRanking
                        ? (i(),
                          a(
                            "div",
                            {
                              key: 0,
                              class: "info-text",
                              innerHTML: e.$t("WeeklyAward.CurrentWeekYouTop", {
                                youTop: c.youTop
                              })
                            },
                            null,
                            8,
                            pr
                          ))
                        : (i(),
                          a(
                            "div",
                            {
                              key: 1,
                              class: "info-text",
                              innerHTML: e.$t(
                                "WeeklyAward.CurrentWeekYouNoTop",
                                { youTop: c.youTop }
                              )
                            },
                            null,
                            8,
                            gr
                          )),
                      s("div", dr, [
                        s("div", mr, [
                          s("div", hr, o(e.$t("WeeklyAward.Rank")), 1),
                          s("div", yr, o(e.$t("WeeklyAward.Bonus")), 1),
                          s("div", wr, o(e.$t("WeeklyAward.User")), 1),
                          s("div", fr, o(e.$t("WeeklyAward.Score")), 1)
                        ]),
                        (i(!0),
                        a(
                          d,
                          null,
                          m(
                            c.currentWeek,
                            (e, t) => (
                              i(),
                              a(
                                "div",
                                {
                                  class: p([
                                    "ranking-item",
                                    {
                                      "ranking-item-active":
                                        u.playerStore.uid === e.uid
                                    }
                                  ]),
                                  key: t
                                },
                                [
                                  s("div", br, o(0 === e.top ? "-" : e.top), 1),
                                  s(
                                    "div",
                                    Sr,
                                    o(
                                      0 === e.reward
                                        ? "---"
                                        : c.getCurrency(e.reward)
                                    ),
                                    1
                                  ),
                                  s("div", kr, o(e.nickname), 1),
                                  s(
                                    "div",
                                    Tr,
                                    o(c.getCurrency(e.score)) + "  ",
                                    1
                                  )
                                ],
                                2
                              )
                            )
                          ),
                          128
                        ))
                      ])
                    ]))
                  : l("", !0),
                1 === u.selectTab
                  ? (i(),
                    a("div", Or, [
                      s(
                        "div",
                        {
                          class: "info-text",
                          innerHTML: e.$t("WeeklyAward.LastWeekInfo")
                        },
                        null,
                        8,
                        Rr
                      ),
                      -1 === c.weeklyTopReward.lastWeekStatus
                        ? (i(),
                          a(
                            "div",
                            {
                              key: 0,
                              class: "info-text",
                              innerHTML: e.$t(
                                "WeeklyAward.LastWeekStatusNoReward"
                              )
                            },
                            null,
                            8,
                            Lr
                          ))
                        : 0 === c.weeklyTopReward.lastWeekStatus
                        ? (i(),
                          a(
                            "div",
                            {
                              key: 1,
                              class: "info-text",
                              innerHTML: e.$t(
                                "WeeklyAward.LastWeekStatusPleaseClaim",
                                { top: c.lastWeekYouTop }
                              )
                            },
                            null,
                            8,
                            Ar
                          ))
                        : 1 === c.weeklyTopReward.lastWeekStatus
                        ? (i(),
                          a(
                            "div",
                            {
                              key: 2,
                              class: "info-text",
                              innerHTML: e.$t(
                                "WeeklyAward.LastWeekStatusClaimed",
                                { top: c.lastWeekYouTop }
                              )
                            },
                            null,
                            8,
                            Ir
                          ))
                        : l("", !0),
                      s("div", vr, [
                        s("div", Pr, [
                          s("div", Cr, o(e.$t("WeeklyAward.Rank")), 1),
                          s("div", xr, o(e.$t("WeeklyAward.Bonus")), 1),
                          s("div", Mr, o(e.$t("WeeklyAward.User")), 1),
                          s("div", jr, o(e.$t("WeeklyAward.Score")), 1)
                        ]),
                        (i(!0),
                        a(
                          d,
                          null,
                          m(
                            c.lastWeek,
                            (e, t) => (
                              i(),
                              a(
                                "div",
                                {
                                  class: p([
                                    "ranking-item",
                                    {
                                      "ranking-item-active":
                                        u.playerStore.uid === e.uid
                                    }
                                  ]),
                                  key: t
                                },
                                [
                                  s("div", Nr, o(0 === e.top ? "-" : e.top), 1),
                                  s(
                                    "div",
                                    Br,
                                    o(
                                      0 === e.reward
                                        ? "---"
                                        : c.getCurrency(e.reward)
                                    ),
                                    1
                                  ),
                                  s("div", Wr, o(e.nickname), 1),
                                  s(
                                    "div",
                                    Er,
                                    o(c.getCurrency(e.score)) + "  ",
                                    1
                                  )
                                ],
                                2
                              )
                            )
                          ),
                          128
                        ))
                      ])
                    ]))
                  : l("", !0)
              ]),
              s("div", Dr, [
                0 === u.selectTab
                  ? (i(),
                    a("div", _r, [
                      s("div", Hr, [
                        s(
                          "div",
                          Vr,
                          o(
                            0 === c.currentWeekOneSelf.top
                              ? "-"
                              : c.currentWeekOneSelf.top
                          ),
                          1
                        ),
                        s(
                          "div",
                          Gr,
                          o(
                            0 === c.currentWeekOneSelf.reward
                              ? "---"
                              : c.getCurrency(c.currentWeekOneSelf.reward)
                          ),
                          1
                        ),
                        s("div", qr, o(c.currentWeekOneSelf.nickname), 1),
                        s(
                          "div",
                          Fr,
                          o(c.getCurrency(c.currentWeekOneSelf.score)) + "   ",
                          1
                        )
                      ])
                    ]))
                  : l("", !0),
                1 === u.selectTab
                  ? (i(),
                    a(
                      "div",
                      {
                        key: 1,
                        class: p([
                          "weekly-award-btn-get-bonus",
                          {
                            "weekly-award-btn-get-bonus-disabled":
                              0 !== c.weeklyTopReward.lastWeekStatus
                          }
                        ]),
                        onClick:
                          t[1] ||
                          (t[1] = (...e) => c.onGetBonus && c.onGetBonus(...e))
                      },
                      o(e.$t("WeeklyAward.GetBonus")),
                      3
                    ))
                  : l("", !0)
              ])
            ])
          );
        }
      ],
      ["__scopeId", "data-v-b58d37ab"]
    ]
  ),
  Jr = { class: "message-box" },
  $r = { class: "message-box-text" };
const zr = re(
    {
      name: "MessageBox",
      data: () => ({ messageBoxStore: Q() }),
      methods: {
        onClose() {
          this.messageBoxStore.show = !1;
        }
      }
    },
    [
      [
        "render",
        function (e, t, n, r, l, u) {
          return (
            i(),
            a("div", Jr, [
              s("div", $r, o(l.messageBoxStore.message), 1),
              s(
                "div",
                {
                  class: "message-box-close",
                  onClick:
                    t[0] || (t[0] = (...e) => u.onClose && u.onClose(...e))
                },
                o(e.$t("Close")),
                1
              )
            ])
          );
        }
      ],
      ["__scopeId", "data-v-35c01e22"]
    ]
  ),
  Xr = {
    name: "ReconnView",
    data: () => ({ messageBoxStore: Q() }),
    methods: {
      onClose() {
        this.messageBoxStore.show = !1;
      }
    }
  },
  Yr = { class: "reconn-view" },
  Qr = { class: "reconn-view-text" },
  Kr = ((e) => (u("data-v-f63d8e37"), (e = e()), c(), e))(() =>
    s(
      "img",
      {
        class: "reconn-view-refresh",
        src: "/assets/refresh-22e37dce.svg",
        alt: "refresh"
      },
      null,
      -1
    )
  );
const Zr = re(Xr, [
    [
      "render",
      function (e, t, n, r, l, u) {
        return i(), a("div", Yr, [s("div", Qr, o(e.$t("Connecting")), 1), Kr]);
      }
    ],
    ["__scopeId", "data-v-f63d8e37"]
  ]),
  ei = {
    name: "Settings",
    components: { ESwitch: Be },
    data: () => ({
      gameManagerStore: ee(),
      playerStore: X(),
      settingsStore: te()
    }),
    methods: {
      onClose() {
        this.settingsStore.show = !1;
      },
      onHome() {
        this.playerStore.back();
      },
      onGameRules() {
        (this.gameManagerStore.isShowGameRules = !0),
          (this.settingsStore.show = !1);
      }
    }
  },
  ti = (e) => (u("data-v-36a1718b"), (e = e()), c(), e),
  ni = { class: "settings" },
  ri = { class: "settings-header" },
  ii = { class: "settings-header-title" },
  ai = { class: "settings-content" },
  si = { class: "settings-item" },
  oi = ti(() =>
    s(
      "img",
      {
        class: "settings-item-icon",
        src: "/assets/sound-122e74a9.svg",
        alt: "sound"
      },
      null,
      -1
    )
  ),
  li = { class: "settings-item-label" },
  ui = ti(() => s("div", { class: "spliter" }, null, -1)),
  ci = { class: "settings-item" },
  pi = ti(() =>
    s(
      "img",
      {
        class: "settings-item-icon",
        src: "/assets/animation-4fdfab86.svg",
        alt: "sound"
      },
      null,
      -1
    )
  ),
  gi = { class: "settings-item-label" },
  di = ti(() => s("div", { class: "spliter" }, null, -1)),
  mi = ti(() =>
    s(
      "img",
      {
        class: "settings-item-icon",
        src: "/assets/game-rules-29895067.svg",
        alt: "sound"
      },
      null,
      -1
    )
  ),
  hi = { class: "settings-item-label" },
  yi = ti(() =>
    s(
      "img",
      {
        class: "settings-footer-home-icon",
        src: "/assets/home-3945503e.svg",
        alt: "home"
      },
      null,
      -1
    )
  ),
  wi = { class: "settings-footer-home" };
const fi = re(ei, [
  [
    "render",
    function (e, t, n, r, l, u) {
      const c = g("ESwitch");
      return (
        i(),
        a("div", ni, [
          s("div", ri, [
            s("div", ii, o(l.playerStore.nickname), 1),
            s("img", {
              class: "settings-header-close",
              src: It,
              alt: "close",
              onClick: t[0] || (t[0] = (...e) => u.onClose && u.onClose(...e))
            })
          ]),
          s("div", ai, [
            s("div", si, [
              oi,
              s("div", li, o(e.$t("Settings.Sound")), 1),
              A(
                c,
                {
                  style: { position: "absolute", right: "1rem" },
                  modelValue: l.settingsStore.isSound,
                  "onUpdate:modelValue":
                    t[1] || (t[1] = (e) => (l.settingsStore.isSound = e))
                },
                null,
                8,
                ["modelValue"]
              )
            ]),
            ui,
            s("div", ci, [
              pi,
              s("div", gi, o(e.$t("Settings.Animation")), 1),
              A(
                c,
                {
                  style: { position: "absolute", right: "1rem" },
                  modelValue: l.settingsStore.isAnimation,
                  "onUpdate:modelValue":
                    t[2] || (t[2] = (e) => (l.settingsStore.isAnimation = e))
                },
                null,
                8,
                ["modelValue"]
              )
            ]),
            di,
            s(
              "div",
              {
                class: "settings-item",
                onClick:
                  t[3] ||
                  (t[3] = (...e) => u.onGameRules && u.onGameRules(...e))
              },
              [mi, s("div", hi, o(e.$t("Settings.GameRules")), 1)]
            )
          ]),
          s(
            "div",
            {
              class: "settings-footer",
              onClick: t[4] || (t[4] = (...e) => u.onHome && u.onHome(...e))
            },
            [yi, s("div", wi, o(e.$t("Settings.Home")), 1)]
          )
        ])
      );
    }
  ],
  ["__scopeId", "data-v-36a1718b"]
]);
var bi = (function () {
  var e,
    t,
    n,
    r,
    i,
    a,
    s,
    o = {},
    l = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;,@#%&()~_?\+=\/\\\.]*$/,
    u = /^(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/,
    c = /^#?[a-fA-F0-9]{6}$/,
    p = /[^\s@]+@[^\s@]+\.[^\s@]+/,
    g = /^([a-z][a-z0-9_]+|"[a-z][a-z0-9_\s]+")$/i,
    d = [];
  function m() {
    var o, l, u;
    for (o in ((t = []), e))
      if (e.hasOwnProperty(o)) {
        for (
          "*" === o ? t.push("\\" + o) : (t.push(o), e[o].noParse && d.push(o)),
            e[o].validChildLookup = {},
            e[o].validParentLookup = {},
            e[o].restrictParentsTo = e[o].restrictParentsTo || [],
            e[o].restrictChildrenTo = e[o].restrictChildrenTo || [],
            u = e[o].restrictChildrenTo.length,
            l = 0;
          l < u;
          l++
        )
          e[o].validChildLookup[e[o].restrictChildrenTo[l]] = !0;
        for (u = e[o].restrictParentsTo.length, l = 0; l < u; l++)
          e[o].validParentLookup[e[o].restrictParentsTo[l]] = !0;
      }
    (n = new RegExp(
      "<bbcl=([0-9]+) (" +
        t.join("|") +
        ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>",
      "gi"
    )),
      (r = new RegExp(
        "\\[(" + t.join("|") + ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]",
        "gi"
      )),
      (i = new RegExp(
        "\\[(" + d.join("|") + ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]",
        "gi"
      )),
      (function () {
        for (var e = [], n = 0; n < t.length; n++)
          "\\*" !== t[n] && e.push("/" + t[n]);
        (a = new RegExp(
          "(\\[)((?:" + t.join("|") + ")(?:[ =][^\\]]*?)?)(\\])",
          "gi"
        )),
          (s = new RegExp("(\\[)(" + e.join("|") + ")(\\])", "gi"));
      })();
  }
  function h(r, i, a, s, o, l, u) {
    (u = u || []), a++;
    var c,
      p,
      g,
      d,
      m = new RegExp("(<bbcl=" + a + " )(" + t.join("|") + ")([ =>])", "gi"),
      y = new RegExp("(<bbcl=" + a + " )(" + t.join("|") + ")([ =>])", "i"),
      w = l.match(m) || [],
      f = e[r] || {};
    for (m.lastIndex = 0, w || (l = ""), g = 0; g < w.length; g++)
      (y.lastIndex = 0),
        (d = w[g].match(y)[2].toLowerCase()),
        f &&
          f.restrictChildrenTo &&
          f.restrictChildrenTo.length > 0 &&
          (f.validChildLookup[d] ||
            ((p =
              'The tag "' +
              d +
              '" is not allowed as a child of the tag "' +
              r +
              '".'),
            u.push(p))),
        (c = e[d] || {}).restrictParentsTo.length > 0 &&
          (c.validParentLookup[r] ||
            ((p =
              'The tag "' +
              r +
              '" is not allowed as a parent of the tag "' +
              d +
              '".'),
            u.push(p)));
    return (
      (l = l.replace(n, function (e, t, n, r, i) {
        return (u = h(n.toLowerCase(), e, t, n, r, i, u)), e;
      })),
      u
    );
  }
  function y(e) {
    return (e = e.replace(/\<([^\>][^\>]*?)\>/gi, function (e, t) {
      return null === t.match(/^bbcl=([0-9]+) /)
        ? "<bbcl=0 " + t + ">"
        : "<" +
            t.replace(/^(bbcl=)([0-9]+)/, function (e, t, n) {
              return t + (parseInt(n, 10) + 1);}) +
            ">";
    }));
  }
  (e = {
    hr: {
      openTag: function (e, t) {
        return "<hr/>";
      }
    },
    b: {
      openTag: function (e, t) {
        return '<span class="xbbcode-b">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    bbcode: {
      openTag: function (e, t) {
        return "";
      },
      closeTag: function (e, t) {
        return "";
      }
    },
    center: {
      openTag: function (e, t) {
        return '<span class="xbbcode-center">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    code: {
      openTag: function (e, t) {
        return '<span class="xbbcode-code">';
      },
      closeTag: function (e, t) {
        return "</span>";
      },
      noParse: !0
    },
    color: {
      openTag: function (e, t) {
        var n = (e = e || "").substr(1).toLowerCase() || "black";
        return (
          (u.lastIndex = 0),
          (c.lastIndex = 0),
          u.test(n) ||
            (c.test(n)
              ? "#" !== n.substr(0, 1) && (n = "#" + n)
              : (n = "black")),
          '<span style="color:' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    email: {
      openTag: function (e, t) {
        var n;
        return (
          (n = e ? e.substr(1) : t.replace(/<.*?>/g, "")),
          (p.lastIndex = 0),
          p.test(n) ? '<a href="mailto:' + n + '">' : "<a>"
        );
      },
      closeTag: function (e, t) {
        return "</a>";
      }
    },
    face: {
      openTag: function (e, t) {
        var n = (e = e || "").substr(1) || "inherit";
        return (
          (g.lastIndex = 0),
          g.test(n) || (n = "inherit"),
          '<span style="font-family:' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    font: {
      openTag: function (e, t) {
        var n = (e = e || "").substr(1) || "inherit";
        return (
          (g.lastIndex = 0),
          g.test(n) || (n = "inherit"),
          '<span style="font-family:' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    i: {
      openTag: function (e, t) {
        return '<span class="xbbcode-i">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    img: {
      openTag: function (e, t) {
        var n = t;
        return (
          (l.lastIndex = 0), l.test(n) || (n = ""), '<img src="' + n + '" />'
        );
      },
      closeTag: function (e, t) {
        return "";
      },
      displayContent: !1
    },
    justify: {
      openTag: function (e, t) {
        return '<span class="xbbcode-justify">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    large: {
      openTag: function (e, t) {
        var n = (e = e || "").substr(1) || "inherit";
        return (
          (u.lastIndex = 0),
          (c.lastIndex = 0),
          u.test(n) ||
            (c.test(n)
              ? "#" !== n.substr(0, 1) && (n = "#" + n)
              : (n = "inherit")),
          '<span class="xbbcode-size-36" style="color:' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    left: {
      openTag: function (e, t) {
        return '<span class="xbbcode-left">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    li: {
      openTag: function (e, t) {
        return "<li>";
      },
      closeTag: function (e, t) {
        return "</li>";
      },
      restrictParentsTo: ["list", "ul", "ol"]
    },
    list: {
      openTag: function (e, t) {
        return "<ul>";
      },
      closeTag: function (e, t) {
        return "</ul>";
      },
      restrictChildrenTo: ["*", "li"]
    },
    noparse: {
      openTag: function (e, t) {
        return "";
      },
      closeTag: function (e, t) {
        return "";
      },
      noParse: !0
    },
    ol: {
      openTag: function (e, t) {
        return "<ol>";
      },
      closeTag: function (e, t) {
        return "</ol>";
      },
      restrictChildrenTo: ["*", "li"]
    },
    php: {
      openTag: function (e, t) {
        return '<span class="xbbcode-code">';
      },
      closeTag: function (e, t) {
        return "</span>";
      },
      noParse: !0
    },
    quote: {
      openTag: function (e, t) {
        return '<blockquote class="xbbcode-blockquote">';
      },
      closeTag: function (e, t) {
        return "</blockquote>";
      }
    },
    right: {
      openTag: function (e, t) {
        return '<span class="xbbcode-right">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    s: {
      openTag: function (e, t) {
        return '<span class="xbbcode-s">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    size: {
      openTag: function (e, t) {
        e = e || "";
        var n = parseInt(e.substr(1), 10) || 0;
        return (
          (n < 4 || n > 40) && (n = 14), '<span class="xbbcode-size-' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    small: {
      openTag: function (e, t) {
        var n = (e = e || "").substr(1) || "inherit";
        return (
          (u.lastIndex = 0),
          (c.lastIndex = 0),
          u.test(n) ||
            (c.test(n)
              ? "#" !== n.substr(0, 1) && (n = "#" + n)
              : (n = "inherit")),
          '<span class="xbbcode-size-10" style="color:' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    sub: {
      openTag: function (e, t) {
        return "<sub>";
      },
      closeTag: function (e, t) {
        return "</sub>";
      }
    },
    sup: {
      openTag: function (e, t) {
        return "<sup>";
      },
      closeTag: function (e, t) {
        return "</sup>";
      }
    },
    table: {
      openTag: function (e, t) {
        return '<table class="xbbcode-table">';
      },
      closeTag: function (e, t) {
        return "</table>";
      },
      restrictChildrenTo: ["tbody", "thead", "tfoot", "tr"]
    },
    tbody: {
      openTag: function (e, t) {
        return "<tbody>";
      },
      closeTag: function (e, t) {
        return "</tbody>";
      },
      restrictChildrenTo: ["tr"],
      restrictParentsTo: ["table"]
    },
    tfoot: {
      openTag: function (e, t) {
        return "<tfoot>";
      },
      closeTag: function (e, t) {
        return "</tfoot>";
      },
      restrictChildrenTo: ["tr"],
      restrictParentsTo: ["table"]
    },
    thead: {
      openTag: function (e, t) {
        return '<thead class="xbbcode-thead">';
      },
      closeTag: function (e, t) {
        return "</thead>";
      },
      restrictChildrenTo: ["tr"],
      restrictParentsTo: ["table"]
    },
    td: {
      openTag: function (e, t) {
        return '<td class="xbbcode-td">';
      },
      closeTag: function (e, t) {
        return "</td>";
      },
      restrictParentsTo: ["tr"]
    },
    th: {
      openTag: function (e, t) {
        return '<th class="xbbcode-th">';
      },
      closeTag: function (e, t) {
        return "</th>";
      },
      restrictParentsTo: ["tr"]
    },
    tr: {
      openTag: function (e, t) {
        return '<tr class="xbbcode-tr">';
      },
      closeTag: function (e, t) {
        return "</tr>";
      },
      restrictChildrenTo: ["td", "th"],
      restrictParentsTo: ["table", "tbody", "tfoot", "thead"]
    },
    u: {
      openTag: function (e, t) {
        return '<span class="xbbcode-u">';
      },
      closeTag: function (e, t) {
        return "</span>";
      }
    },
    ul: {
      openTag: function (e, t) {
        return "<ul>";
      },
      closeTag: function (e, t) {
        return "</ul>";
      },
      restrictChildrenTo: ["*", "li"]
    },
    url: {
      openTag: function (e, t) {
        var n;
        return (
          (n = e ? e.substr(1) : t.replace(/<.*?>/g, "")),
          (l.lastIndex = 0),
          l.test(n) || (n = "#"),
          '<a href="' + n + '">'
        );
      },
      closeTag: function (e, t) {
        return "</a>";
      }
    },
    "*": {
      openTag: function (e, t) {
        return "<li>";
      },
      closeTag: function (e, t) {
        return "</li>";
      },
      restrictParentsTo: ["list", "ul", "ol"]
    }
  }),
    m();
  var w = function (t, r, i, a, s) {
    i = i.toLowerCase();
    var o = e[i].noParse
        ? s
            .replace(/<bbcl=[0-9]+ \/\*>/gi, "")
            .replace(/<bbcl=[0-9]+ /gi, "&#91;")
            .replace(/>/gi, "&#93;")
        : s.replace(n, w),
      l = e[i].openTag ? e[i].openTag(a, o) : "",
      u = e[i].closeTag ? e[i].closeTag(a, o) : "";
    return !1 === e[i].displayContent && (o = ""), l + o + u;
  };
  return (
    (o.tags = function () {
      return e;
    }),
    (o.addTags = function (t) {
      var n;
      for (n in t) e[n] = t[n];
      m();
    }),
    (o.process = function (t) {
      var o = { html: "", error: !1 },
        l = [];
      for (
        t.text = t.text
          .replaceAll("'", "&#39;")
          .replaceAll('"', "&quot;")
          .replaceAll(";", "&#59;"),
          t.text = t.text.replace(/</g, "&lt;"),
          t.text = t.text.replace(/>/g, "&gt;"),
          t.text = t.text.replace(a, function (e, t, n, r) {
            return "<" + n + ">";
          }),
          t.text = t.text.replace(s, function (e, t, n, r) {
            return "<" + n + ">";
          }),
          t.text = t.text.replace(/\[/g, "&#91;"),
          t.text = t.text.replace(/\]/g, "&#93;"),
          t.text = t.text.replace(/</g, "["),
          t.text = t.text.replace(/>/g, "]");
        t.text !==
        (t.text = t.text.replace(i, function (e, t, n, r) {
          return (
            "[" +
            t +
            (n = n || "") +
            "]" +
            (r =
              (r = (r = r.replace(/\[/g, "&#91;")).replace(/\]/g, "&#93;")) ||
              "") +
            "[/" +
            t +
            "]"
          );
        }));

      );
      return (
        (t.text = (function (e) {
          for (
            e = (e = e.replace(
              /\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/gi,
              "<"
            )).replace(/\[(?=list([ =][^\]]*)?\]|\/list[\]])/gi, ">");
            e !==
            (e = e.replace(
              />list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi,
              function (e, t, n) {
                for (
                  var r = e;
                  r !==
                  (r = r.replace(
                    /\[\*\]([^\[]*?)(\[\*\]|>\/list])/i,
                    function (e, t, n) {
                      return (
                        "<*]" +
                        t +
                        (">/list]" === n.toLowerCase()
                          ? "</*]</list]"
                          : "</*][*]")
                      );
                    }
                  ));

                );
                return r.replace(/>/g, "<");
              }
            ));

          );
          return e.replace(/</g, "[");
        })(t.text)),
        (t.text = (function (e) {
          for (
            ;
            e !==
            (e = e.replace(r, function (e, t, n, r) {
              return y((e = (e = e.replace(/\[/g, "<")).replace(/\]/g, ">")));
            }));

          );
          return e;
        })(t.text)),
        (l = h("bbcode", t.text, -1, 0, 0, t.text)),
        (o.html = (function (e) {
          var t = e.text;
          return t.replace(n, w);
        })(t)),
        (o.html = (function (t) {
          for (var n in e)
            e[n].closeTag || (t = t.replaceAll(`[${n}]`, e[n].openTag()));
          return t;
        })(o.html)),
        (-1 === o.html.indexOf("[") && -1 === o.html.indexOf("]")) ||
          l.push("Some tags appear to be misaligned."),
        t.removeMisalignedTags && (o.html = o.html.replace(/\[.*?\]/g, "")),
        t.addInLineBreaks &&
          (o.html = '<div style="white-space:pre-wrap;">' + o.html + "</div>"),
        t.escapeHtml ||
          ((o.html = o.html.replace("&#91;", "[")),
          (o.html = o.html.replace("&#93;", "]"))),
        (o.error = 0 !== l.length),
        (o.errorQueue = l),
        o
      );
    }),
    o
  );
})();
"undefined" != typeof module && (module.exports = bi);
const Si = { class: "broadcast" },
  ki = { ref: "item", class: "broadcast-item-list" },
  Ti = ["innerHTML"];
const Oi = re(
    {
      name: "Broadcast",
      data: () => ({ broadcastStore: K(), tweenMove: null }),
      mounted() {},
      watch: {
        broadcastListLength(e, t) {
          0 !== e &&
            this.$nextTick(() => {
              this.tweenMove &&
                (this.tweenMove.kill(), (this.tweenMove = null));
              let e = 0;
              for (let n = 0; n < this.$refs.item.children.length; n++)
                e += this.$refs.item.children[n].clientWidth;
              const t = e / 80;
              this.tweenMove = S.fromTo(
                this.$refs.item,
                { x: this.$refs.item.parentElement.clientWidth },
                { x: -e, duration: t, repeat: 1 / 0, ease: "none" }
              );
            });
        }
      },
      computed: {
        broadcastListLength() {
          return this.broadcastStore.broadcastList.length;
        },
        broadcastList() {
          return this.broadcastStore.broadcastList;
        }
      },
      methods: {
        BBCodeToHtml(e) {
          let t = e;
          return (
            (t = t.replace(/</g, "[")),
            (t = t.replace(/>/g, "]")),
            bi.process({
              text: t,
              removeMisalignedTags: !1,
              addInLineBreaks: !1
            }).html
          );
        },
        addSpace: () => "&nbsp;".repeat(100)
      }
    },
    [
      [
        "render",
        function (e, t, n, r, o, l) {
          return (
            i(),
            a("div", Si, [
              s(
                "div",
                ki,
                [
                  (i(!0),
                  a(
                    d,
                    null,
                    m(
                      l.broadcastList,
                      (e, t) => (
                        i(),
                        a(
                          "div",
                          {
                            class: "broadcast-item",
                            ref_for: !0,
                            ref: "itemList",
                            key: t,
                            innerHTML:
                              this.BBCodeToHtml(e.content) +
                              (Number(t) === l.broadcastList.length - 1
                                ? ""
                                : this.addSpace())
                          },
                          null,
                          8,
                          Ti
                        )
                      )
                    ),
                    128
                  ))
                ],
                512
              )
            ])
          );
        }
      ],
      ["__scopeId", "data-v-be1baa27"]
    ]
  ),
  Ri = {
    name: "GameRules",
    data: () => ({ gameManagerStore: ee(), playerStore: X() }),
    computed: {
      maxBet() {
        return this.getCurrency(this.playerStore.maxAnteLimit);
      },
      maxWin() {
        return this.getCurrency(this.playerStore.maxAwardLimit);
      }
    },
    methods: {
      getCurrency(e) {
        return G(e, 2, this.playerStore.currencyRate);
      },
      onClose() {
        ee().isShowGameRules = !1;
      }
    }
  },
  Li = (e) => (u("data-v-8d58e2fb"), (e = e()), c(), e),
  Ai = { class: "game-rules" },
  Ii = { class: "game-rules-header" },
  vi = { class: "game-rules-header-title" },
  Pi = { class: "game-rules-content" },
  Ci = { style: { "margin-top": "1rem" } },
  xi = { class: "how-to-play" },
  Mi = Li(() =>
    s(
      "img",
      { class: "how-to-play-img", src: "/images/1.png", alt: "1" },
      null,
      -1
    )
  ),
  ji = ["innerHTML"],
  Ni = { class: "how-to-play" },
  Bi = Li(() =>
    s(
      "img",
      { class: "how-to-play-img", src: "/images/2.png", alt: "2" },
      null,
      -1
    )
  ),
  Wi = ["innerHTML"],
  Ei = { class: "how-to-play" },
  Di = Li(() =>
    s(
      "img",
      { class: "how-to-play-img", src: "/images/3.png", alt: "3" },
      null,
      -1
    )
  ),
  _i = ["innerHTML"],
  Hi = { class: "remember" },
  Vi = { class: "game-limits" },
  Gi = ["innerHTML"],
  qi = ["innerHTML"];
const Fi = { class: "page" },
  Ui = { key: 1 };
const Ji = re(
  {
    components: {
      GameRules: re(Ri, [
        [
          "render",
          function (e, t, n, r, l, u) {
            return (
              i(),
              a("div", Ai, [
                s("div", Ii, [
                  s("div", vi, o(e.$t("GameRules.Title")), 1),
                  s("img", {
                    class: "game-rules-header-close",
                    src: It,
                    alt: "close",
                    onClick:
                      t[0] || (t[0] = (...e) => u.onClose && u.onClose(...e))
                  })
                ]),
                s("div", Pi, [
                  s("div", null, o(e.$t("GameRules.Intro")), 1),
                  s("div", Ci, o(e.$t("GameRules.HowToPlay")), 1),
                  s("div", xi, [
                    Mi,
                    s(
                      "div",
                      {
                        class: "how-to-play-txt",
                        innerHTML: e.$t("GameRules.Play1")
                      },
                      null,
                      8,
                      ji
                    )
                  ]),
                  s("div", Ni, [
                    Bi,
                    s(
                      "div",
                      {
                        class: "how-to-play-txt",
                        innerHTML: e.$t("GameRules.Play2")
                      },
                      null,
                      8,
                      Wi
                    )
                  ]),
                  s("div", Ei, [
                    Di,
                    s(
                      "div",
                      {
                        class: "how-to-play-txt",
                        innerHTML: e.$t("GameRules.Play3")
                      },
                      null,
                      8,
                      _i
                    )
                  ]),
                  s("div", Hi, o(e.$t("GameRules.Remember")), 1),
                  s("div", Vi, [
                    s("div", null, o(e.$t("GameRules.GameLimits")), 1),
                    s(
                      "div",
                      {
                        class: "game-limits-value",
                        innerHTML: e.$t("GameRules.MaxBet", {
                          maxBet: u.maxBet
                        })
                      },
                      null,
                      8,
                      Gi
                    ),
                    s(
                      "div",
                      {
                        class: "game-limits-value",
                        innerHTML: e.$t("GameRules.MaxWin", {
                          maxWin: u.maxWin
                        })
                      },
                      null,
                      8,
                      qi
                    )
                  ])
                ])
              ])
            );
          }
        ],
        ["__scopeId", "data-v-8d58e2fb"]
      ]),
      Broadcast: Oi,
      Settings: fi,
      ReconnView: Zr,
      MessageBox: zr,
      WeeklyAward: Ur,
      EPopup: rr,
      AutoPlayOptions: Zn,
      WinMessage: xn,
      TopBar: de,
      GameScene: kt,
      SplashPanel: At,
      InfoBoards: On
    },
    data: () => ({
      gameManagerStore: ee(),
      messageBoxStore: Q(),
      settingsStore: te(),
      message: "hello world"
    }),
    mounted() {
      console.log("App mounted"),
        setTimeout(() => {
          this.gameManagerStore.connectServer();
        }, 500);
    },
    methods: {}
  },
  [
    [
      "render",
      function (e, t, n, r, o, u) {
        const c = g("SplashPanel"),
          p = g("TopBar"),
          d = g("GameScene"),
          m = g("Broadcast"),
          y = g("InfoBoards"),
          w = g("WinMessage"),
          f = g("AutoPlayOptions"),
          b = g("WeeklyAward"),
          S = g("EPopup"),
          k = g("MessageBox"),
          T = g("ReconnView"),
          O = g("Settings"),
          R = g("GameRules");
        return (
          i(),
          a("div", Fi, [
            o.gameManagerStore.isLoading
              ? (i(), h(c, { key: 0 }))
              : (i(),
                a("div", Ui, [
                  s("header", null, [A(p)]),
                  s("main", null, [
                    A(d),
                    A(m),
                    A(y, { style: { margin: "0.3rem 0.3rem" } })
                  ]),
                  A(w, { class: "win-message" }),
                  o.gameManagerStore.isShowAutoPlayOptions
                    ? (i(),
                      h(
                        f,
                        {
                          key: 0,
                          site: o.gameManagerStore.autoPlayOptionsSite
                        },
                        null,
                        8,
                        ["site"]
                      ))
                    : l("", !0),
                  A(
                    S,
                    {
                      modelValue: o.gameManagerStore.isShowWeeklyAward,
                      "onUpdate:modelValue":
                        t[0] ||
                        (t[0] = (e) =>
                          (o.gameManagerStore.isShowWeeklyAward = e))
                    },
                    { default: M(() => [A(b)]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                  A(
                    S,
                    {
                      modelValue: o.messageBoxStore.show,
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (e) => (o.messageBoxStore.show = e))
                    },
                    { default: M(() => [A(k)]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                  A(
                    S,
                    {
                      "mask-opacity": 0.7,
                      "click-mask-no-close": "",
                      modelValue: o.gameManagerStore.isReconnecting,
                      "onUpdate:modelValue":
                        t[2] ||
                        (t[2] = (e) => (o.gameManagerStore.isReconnecting = e))
                    },
                    { default: M(() => [A(T)]), _: 1 },
                    8,
                    ["mask-opacity", "modelValue"]
                  ),
                  A(
                    S,
                    {
                      modelValue: o.settingsStore.show,
                      "onUpdate:modelValue":
                        t[3] || (t[3] = (e) => (o.settingsStore.show = e))
                    },
                    { default: M(() => [A(O)]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                  A(
                    S,
                    {
                      modelValue: o.gameManagerStore.isShowGameRules,
                      "onUpdate:modelValue":
                        t[4] ||
                        (t[4] = (e) => (o.gameManagerStore.isShowGameRules = e))
                    },
                    { default: M(() => [A(R)]), _: 1 },
                    8,
                    ["modelValue"]
                  )
                ]))
          ])
        );
      }
    ],
    ["__scopeId", "data-v-6981be9d"]
  ]
);
S.registerPlugin(j, N);
const $i = B(Ji);
$i.use(W()),
  $i.use(E),
  $i.mount("#app"),
  document.body.addEventListener("touchstart", () => {});
export { e as __vite_legacy_guard };
