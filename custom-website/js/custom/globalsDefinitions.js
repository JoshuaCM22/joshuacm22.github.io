    (function () {
      var now = Date.now()
      window.initialTimestamps = {
        initialTimestamp: now,
        initialRequestTimestamp: Math.round(performance.timeOrigin ? performance.timeOrigin : now - performance.now())
      }

      window.thunderboltTag = "QA_READY"
      window.thunderboltVersion = "1.16212.0"
    })();