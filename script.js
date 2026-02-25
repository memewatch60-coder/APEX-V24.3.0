// Logika Filter Tombol Update Harian
function checkUpdateStatus(profitPercentage) {
    const updateBtn = document.getElementById('update-harian-btn');
    if (profitPercentage >= 25) {
        updateBtn.style.display = 'block';
    } else {
        updateBtn.style.display = 'none';
    }
}

// Logika Manual Security Profit & Safety Buffer
function manualSecurityProfit() {
    let currentBalance = getBalance();
    let capital = getInitialCapital();
    
    // Simpan ke Vault
    vault.store(currentBalance);
    
    // Safety Buffer Logic
    if (currentBalance < (capital * 2)) { // Belum 100% dari modal
        disableCompounding();
        console.log("Safety Buffer Active: Compounding locked until 100% capital reached.");
    } else {
        enableCompounding();
    }
}
