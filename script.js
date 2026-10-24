const tanggalPernikahan = new Date("2026-11-15T08:00:00+07:00").getTime();

  function updateCountdown() {
    const sekarang = Date.now();
    const selisih = tanggalPernikahan - sekarang;
    const ids = ["days", "hours", "minutes", "seconds"];

    if (selisih <= 0) {
      ids.forEach(id => document.getElementById(id).textContent = "00");
      return;
    }

    document.getElementById("days").textContent =
      Math.floor(selisih / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent =
      Math.floor((selisih / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").textContent =
      Math.floor((selisih / (1000 * 60)) % 60);
    document.getElementById("seconds").textContent =
      Math.floor((selisih / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
