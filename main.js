function runAudit() {
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const value = parseFloat(document.getElementById('saleValue').value) || 0;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 0) / 100;
    const targetConv = 0.03; 
    
    const currentRev = traffic * currentConv * value;
    const projectedRev = traffic * targetConv * value;
    const annualLeak = (projectedRev - currentRev) * 12;

    const resultDiv = document.getElementById('auditResult');
    resultDiv.innerHTML = `
        <div style="color: #ff007f; font-weight: 900; font-size: 2.5rem;">$${Math.floor(annualLeak).toLocaleString()}</div>
        <div style="font-family: 'Space Mono'; font-size: 0.7rem; opacity: 0.6;">ANNUAL REVENUE LEAK DETECTED</div>
    `;
}
