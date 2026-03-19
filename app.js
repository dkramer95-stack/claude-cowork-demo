// ── Sample Data for Each Skill Demo ──

const demoData = {
  receipt: {
    input: `📁 /receipts/ — 5 files found

receipt_001.jpg — Starbucks coffee
receipt_002.png — Office Depot supplies
receipt_003.jpg — Delta Airlines flight
receipt_004.pdf — AWS monthly bill
receipt_005.jpg — Uber ride to client`,

    steps: [
      "Reading receipt_001.jpg...",
      "OCR extracting text → Starbucks | $14.82",
      "Reading receipt_002.png...",
      "OCR extracting text → Office Depot | $247.53",
      "Reading receipt_003.jpg...",
      "OCR extracting text → Delta Airlines | $612.00",
      "⚠ FLAG: Amount exceeds $500 threshold",
      "Reading receipt_004.pdf...",
      "OCR extracting text → AWS | $189.40",
      "Reading receipt_005.jpg...",
      "OCR extracting text → Uber | $34.75",
      "Generating expense_report_march2026.xlsx..."
    ],

    output: `<span class="header-row">EXPENSE REPORT — March 2026</span>
<span class="header-row">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="label">Date       Vendor          Amount    Category</span>
───────────────────────────────────────────
03/02/26   Starbucks       $14.82    Meals
03/05/26   Office Depot    $247.53   Supplies
03/08/26   Delta Airlines  $612.00   Travel
03/12/26   AWS             $189.40   Software
03/14/26   Uber            $34.75    Travel

<span class="header-row">────────────────────────────────────</span>
<span class="label">TOTAL:</span>                  <span class="val">$1,098.50</span>
<span class="label">Tax Deductible:</span>         <span class="val">$1,098.50</span>

<span class="flag">⚠ FLAGGED FOR REVIEW:</span>
  • Delta Airlines — $612.00 (exceeds $500)

<span class="ok">✓ Saved: expense_report_march2026.xlsx</span>
<span class="ok">✓ 5 receipts processed in 47 seconds</span>`
  },

  categorize: {
    input: `📊 expense_data_q1_2026.csv — 12 transactions

$14.82   — Starbucks
$247.53  — Office Depot
$612.00  — Delta Airlines
$189.40  — AWS
$34.75   — Uber
$892.00  — Marriott Hotel
$67.30   — DoorDash
$1,200   — Adobe Creative Cloud
$45.00   — Parking Garage
$128.50  — FedEx Shipping
$312.00  — WeWork Coworking
$22.40   — Lyft`,

    steps: [
      "Loading expense_data_q1_2026.csv...",
      "Analyzing 12 transactions...",
      "Classifying: Starbucks → Meals & Entertainment",
      "Classifying: Office Depot → Office Supplies",
      "Classifying: Delta Airlines → Travel",
      "Classifying: AWS → Software & SaaS",
      "Classifying: Uber → Travel",
      "Classifying: Marriott → Travel",
      "⚠ FLAG: Marriott $892.00 exceeds $500",
      "Classifying: DoorDash → Meals & Entertainment",
      "Classifying: Adobe → Software & SaaS",
      "⚠ FLAG: Adobe $1,200 exceeds $500",
      "Classifying remaining 4 items...",
      "Building category summary..."
    ],

    output: `<span class="header-row">EXPENSE CATEGORIZATION — Q1 2026</span>
<span class="header-row">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="label">🚗 Travel</span>               <span class="val">$1,583.75</span>  (41.4%)
   Delta Airlines  $612.00
   Marriott Hotel  $892.00
   Uber            $34.75
   Lyft            $22.40
   Parking         $45.00

<span class="label">💻 Software & SaaS</span>      <span class="val">$1,389.40</span>  (36.3%)
   Adobe CC        $1,200.00
   AWS             $189.40

<span class="label">🍽  Meals & Entertainment</span> <span class="val">$82.12</span>    (2.1%)
   Starbucks       $14.82
   DoorDash        $67.30

<span class="label">📦 Office & Supplies</span>     <span class="val">$376.03</span>   (9.8%)
   Office Depot    $247.53
   FedEx           $128.50

<span class="label">🏢 Coworking</span>            <span class="val">$312.00</span>   (8.2%)
   WeWork          $312.00

<span class="header-row">────────────────────────────────────</span>
<span class="label">GRAND TOTAL:</span>            <span class="val">$3,765.70</span>

<span class="flag">⚠ FLAGGED (2 items over $500):</span>
  • Marriott Hotel — $892.00
  • Adobe CC — $1,200.00

<span class="ok">✓ Categorized 12 transactions</span>`
  },

  invoice: {
    input: `📁 /invoices/ — 4 pending invoices

INV-2026-041.pdf — Acme Corp
INV-2026-042.pdf — TechStart LLC
INV-2026-043.pdf — Green Office Supply
INV-2026-044.pdf — CloudHost Inc`,

    steps: [
      "Reading INV-2026-041.pdf...",
      "Extracted: Acme Corp | $4,500.00 | Due: 03/20/26",
      "Reading INV-2026-042.pdf...",
      "Extracted: TechStart LLC | $12,800.00 | Due: 03/15/26",
      "⚠ OVERDUE: Due date has passed!",
      "Reading INV-2026-043.pdf...",
      "Extracted: Green Office | $890.00 | Due: 03/28/26",
      "Reading INV-2026-044.pdf...",
      "Extracted: CloudHost | $2,150.00 | Due: 04/01/26",
      "Cross-referencing with bank statement...",
      "Generating invoice tracker..."
    ],

    output: `<span class="header-row">INVOICE TRACKER — March 2026</span>
<span class="header-row">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="label">Invoice      Vendor           Amount      Due        Status</span>
──────────────────────────────────────────────────────────
INV-041      Acme Corp        $4,500.00   03/20/26   <span class="val">Pending</span>
INV-042      TechStart LLC    $12,800.00  03/15/26   <span class="flag">OVERDUE</span>
INV-043      Green Office     $890.00     03/28/26   <span class="val">Pending</span>
INV-044      CloudHost Inc    $2,150.00   04/01/26   <span class="ok">On Track</span>

<span class="header-row">────────────────────────────────────</span>
<span class="label">Total Payable:</span>        <span class="val">$20,340.00</span>
<span class="label">Due This Week:</span>        <span class="val">$17,300.00</span>

<span class="flag">⚠ ACTION REQUIRED:</span>
  • INV-042 TechStart LLC — $12,800 OVERDUE (1 day)
  • INV-041 Acme Corp — $4,500 due in 4 days

<span class="label">Payment Priority:</span>
  1. TechStart LLC (overdue)
  2. Acme Corp (due 03/20)
  3. Green Office (due 03/28)
  4. CloudHost Inc (due 04/01)

<span class="ok">✓ Saved: invoice_tracker_march2026.xlsx</span>`
  },

  reconcile: {
    input: `📄 bank_statement_march2026.csv
📄 general_ledger_q1.csv

Bank Statement — 8 transactions:
03/01  ACH CREDIT ACME       +$4,500.00
03/03  DEBIT CARD STAPLES     -$247.53
03/05  ACH DEBIT AMZN WEB     -$189.40
03/07  WIRE TECHSTART LLC     +$12,800.00
03/08  DEBIT CARD DELTA AIR   -$612.00
03/10  DEBIT CARD UBER TRIP   -$34.75
03/12  CHECK #1042            -$1,500.00
03/14  DEBIT CARD STARBUCKS   -$14.82`,

    steps: [
      "Loading bank_statement_march2026.csv...",
      "Loading general_ledger_q1.csv...",
      "Cleaning vendor names...",
      "  AMZN WEB → Amazon Web Services (AWS)",
      "  DELTA AIR → Delta Airlines",
      "  UBER TRIP → Uber Technologies",
      "Matching: ACH CREDIT ACME ↔ GL: Acme Corp Payment",
      "Matching: STAPLES ↔ GL: Office Depot (vendor alias)",
      "  ⚠ Name mismatch — Staples vs Office Depot",
      "Matching: AMZN WEB ↔ GL: AWS Monthly",
      "Matching: TECHSTART ↔ GL: TechStart Revenue",
      "Matching: DELTA AIR ↔ GL: Travel - Delta",
      "Matching: UBER ↔ GL: Travel - Uber",
      "Matching: CHECK #1042 ↔ searching GL...",
      "  ⚠ NO MATCH FOUND for CHECK #1042",
      "Matching: STARBUCKS ↔ GL: Meals - Starbucks",
      "Building reconciliation report..."
    ],

    output: `<span class="header-row">BANK RECONCILIATION — March 2026</span>
<span class="header-row">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="label">Bank Trans        GL Entry            Status</span>
──────────────────────────────────────────────
ACH Acme Corp     Acme Payment        <span class="ok">✓ MATCHED</span>
Staples           Office Depot        <span class="flag">⚠ ALIAS</span>
AWS               AWS Monthly         <span class="ok">✓ MATCHED</span>
TechStart LLC     TechStart Rev       <span class="ok">✓ MATCHED</span>
Delta Airlines    Travel-Delta        <span class="ok">✓ MATCHED</span>
Uber              Travel-Uber         <span class="ok">✓ MATCHED</span>
CHECK #1042       —                   <span class="flag">✗ UNMATCHED</span>
Starbucks         Meals-Starbucks     <span class="ok">✓ MATCHED</span>

<span class="header-row">────────────────────────────────────</span>
<span class="label">Summary:</span>
  Matched:    <span class="ok">6 / 8</span>  (75%)
  Aliases:    <span class="val">1</span>  (needs vendor mapping)
  Unmatched:  <span class="flag">1</span>  (needs investigation)

<span class="label">Bank Balance:</span>    <span class="val">$14,701.50</span>
<span class="label">GL Balance:</span>      <span class="val">$16,201.50</span>
<span class="label">Difference:</span>      <span class="flag">-$1,500.00</span> (CHECK #1042)

<span class="flag">⚠ ACTION REQUIRED:</span>
  • CHECK #1042 ($1,500) — No GL entry found
  • Staples/Office Depot — Add vendor alias

<span class="ok">✓ Saved: reconciliation_march2026.xlsx</span>`
  },

  report: {
    input: `📁 Source files for monthly report:

expense_report_march2026.xlsx
invoice_tracker_march2026.xlsx
reconciliation_march2026.xlsx
expense_report_february2026.xlsx (prior month)`,

    steps: [
      "Loading March expense report...",
      "Loading March invoice tracker...",
      "Loading March reconciliation...",
      "Loading February data for comparison...",
      "Calculating month-over-month changes...",
      "  Expenses: Feb $2,980 → Mar $3,766 (+26.4%)",
      "  Revenue: Feb $15,200 → Mar $17,300 (+13.8%)",
      "Compiling unpaid invoices...",
      "Aggregating flagged items...",
      "Generating executive summary...",
      "Building charts and visualizations...",
      "Formatting final report..."
    ],

    output: `<span class="header-row">MONTHLY FINANCIAL SUMMARY — March 2026</span>
<span class="header-row">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="label">REVENUE</span>
  Acme Corp           $4,500.00
  TechStart LLC       $12,800.00
  <span class="label">Total Revenue:</span>     <span class="val">$17,300.00</span>  <span class="ok">(+13.8% MoM)</span>

<span class="label">EXPENSES BY CATEGORY</span>
  Travel              $1,583.75   ████████░░  41.4%
  Software & SaaS     $1,389.40   ███████░░░  36.3%
  Office & Supplies   $376.03     ██░░░░░░░░   9.8%
  Coworking           $312.00     ██░░░░░░░░   8.2%
  Meals               $82.12      █░░░░░░░░░   2.1%
  Shipping            $128.50     █░░░░░░░░░   3.4%
  <span class="label">Total Expenses:</span>    <span class="val">$3,765.70</span>  <span class="flag">(+26.4% MoM)</span>

<span class="label">NET INCOME:</span>          <span class="ok">$13,534.30</span>

<span class="label">RECONCILIATION STATUS</span>
  Matched:     6/8 transactions
  Unresolved:  CHECK #1042 ($1,500)

<span class="label">UNPAID INVOICES</span>
  <span class="flag">• TechStart LLC  $12,800 — OVERDUE</span>
  • Acme Corp      $4,500 — Due 03/20
  • Green Office   $890   — Due 03/28
  • CloudHost      $2,150 — Due 04/01

<span class="flag">⚠ ITEMS REQUIRING ATTENTION (4):</span>
  1. TechStart invoice overdue
  2. CHECK #1042 unmatched
  3. Expenses up 26.4% — review Travel
  4. 2 receipts over $500 threshold

<span class="ok">✓ Saved: monthly_summary_march2026.pdf</span>
<span class="ok">✓ Report generated in 2 minutes 14 seconds</span>`
  }
};

// ── Hero Terminal Animation ──

const heroLines = [
  { text: '$ claude cowork', cls: 'cmd' },
  { text: '  Loading accounting skills...', cls: 'dim' },
  { text: '', cls: '' },
  { text: '  ✓ Receipt Processing       loaded', cls: 'success' },
  { text: '  ✓ Expense Categorization   loaded', cls: 'success' },
  { text: '  ✓ Invoice Management       loaded', cls: 'success' },
  { text: '  ✓ Bank Reconciliation      loaded', cls: 'success' },
  { text: '  ✓ Monthly Reporting        loaded', cls: 'success' },
  { text: '', cls: '' },
  { text: '  Ready. Drop files to begin.', cls: 'info' },
  { text: '', cls: '' },
  { text: '$ /run receipt-processing ./receipts/', cls: 'cmd' },
  { text: '  Scanning 5 receipt files...', cls: 'dim' },
  { text: '  Extracting data via OCR...', cls: 'dim' },
  { text: '  Categorizing expenses...', cls: 'dim' },
  { text: '  ✓ expense_report_march2026.xlsx saved', cls: 'success' },
  { text: '  Done — 5 receipts processed in 47s', cls: 'info' },
];

function animateHero() {
  const el = document.getElementById('heroTerminal');
  if (!el) return;
  let i = 0;

  function addLine() {
    if (i >= heroLines.length) {
      setTimeout(() => {
        el.innerHTML = '';
        i = 0;
        addLine();
      }, 4000);
      return;
    }
    const line = heroLines[i];
    const div = document.createElement('div');
    div.className = line.cls;
    div.textContent = line.text || '\u00A0';
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
    i++;
    setTimeout(addLine, line.text.startsWith('$') ? 600 : 200);
  }
  addLine();
}

// ── Settings & Modal ──

const modal = document.getElementById('settingsModal');
document.getElementById('openSettings').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('apiKey').value = localStorage.getItem('anthropic_api_key') || '';
  if (modal) modal.classList.add('show');
});
document.getElementById('closeSettings').addEventListener('click', () => {
  if (modal) modal.classList.remove('show');
});
document.getElementById('saveSettings').addEventListener('click', () => {
  const key = document.getElementById('apiKey').value.trim();
  if (key) localStorage.setItem('anthropic_api_key', key);
  else localStorage.removeItem('anthropic_api_key');
  if (modal) modal.classList.remove('show');
});

// ── Demo Interaction ──

let currentDemo = 'receipt';
let isRunning = false;
let uploadedFileData = null; 
let currentOutputText = "";

function loadDemo(name) {
  currentDemo = name;
  const data = demoData[name];
  uploadedFileData = null;
  document.getElementById('demoInput').innerHTML = `
    <div class="drop-message" style="margin-bottom: 1rem; padding: 1rem; border: 1px dashed var(--border); border-radius: 8px;">
      <span style="color: var(--text);">Drag & Drop real Excel/CSV files here</span>
      <span class="text-xs">We'll use SheetJS & the Claude API</span>
    </div>
    <div class="dim">Or run the simulated data:</div>
    <div style="margin-top:0.5rem; font-family: monospace; white-space: pre-wrap; font-size: 0.85em;">${data.input}</div>
  `;
  document.getElementById('demoOutput').innerHTML = '<span class="dim">Click "Run Skill" to process...</span>';
  document.getElementById('demoProgress').classList.remove('active');
  document.querySelector('.progress-fill').style.width = '0%';
  document.getElementById('exportActions').style.display = 'none';

  document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.demo-tab[data-demo="${name}"]`).classList.add('active');
}

// ── File Drag & Drop (SheetJS) ──

const dropZone = document.getElementById('dropZone');
if (dropZone) {
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    document.getElementById('demoInput').classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => {
    document.getElementById('demoInput').classList.remove('drag-over');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    document.getElementById('demoInput').classList.remove('drag-over');
    
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      
      reader.onload = function(evt) {
        try {
          const data = evt.target.result;
          let csvStr = "";
          let previewHtml = "";

          if (file.name.endsWith('.xlsx')) {
            const workbook = XLSX.read(data, {type: 'binary'});
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            csvStr = XLSX.utils.sheet_to_csv(firstSheet);
            
            // Preview first 5 rows
            const jsonParams = { header: 1 };
            const rowData = XLSX.utils.sheet_to_json(firstSheet, jsonParams).slice(0, 5);
            
            previewHtml = "<table>";
            rowData.forEach((row, i) => {
              previewHtml += "<tr>";
              row.forEach(cell => {
                if (i === 0) previewHtml += `<th>${cell || ''}</th>`;
                else previewHtml += `<td>${cell || ''}</td>`;
              });
              previewHtml += "</tr>";
            });
            previewHtml += "</table><div class='mt-2 text-xs dim'>Previewing first 5 rows...</div>";
          } else {
            // Assume text/csv
            csvStr = data;
            const lines = csvStr.split('\n').slice(0, 5);
            previewHtml = "<div style='white-space:pre-wrap; font-family: monospace; font-size: 0.8em;'>" + lines.join('\n') + "\n...</div>";
          }

          uploadedFileData = csvStr;
          document.getElementById('demoInput').innerHTML = `
            <div style="color: var(--green); margin-bottom: 0.5rem; font-weight: 600;">✓ Uploaded: ${file.name}</div>
            ${previewHtml}
          `;
        } catch (err) {
          alert("Error parsing file: " + err.message);
        }
      };
      
      if (file.name.endsWith('.xlsx')) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsText(file);
      }
    }
  });
}

// ── Claude API Logic ──

async function processWithClaude(dataStr) {
  const apiKey = localStorage.getItem('anthropic_api_key');
  if (!apiKey) {
    alert("Please enter your Anthropic API Key in Settings to process real files.");
    return null;
  }

  const prompt = `You are an AI accounting assistant. The user wants you to run the "${currentDemo}" skill on the following data:

${dataStr}

Process the data and output a formatted plain-text accounting report (similar to a CLI or monospace report). Do NOT use markdown code blocks, just pure formatted text. Use emojis if appropriate. Be concise and professional.

CRITICAL PRIVACY REQUIREMENT: 
You must strictly protect user data. Redact all confidential information, including personal names, bank/credit card numbers, and exact vendor transaction IDs. Replace such data with asterisks (e.g., Acct ending in ****1234 or Name: J*** S***). Emphasize that confidential data has been protected directly in your output.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerously-allow-browser': 'true'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'API Error');
    }

    const json = await res.json();
    return json.content[0].text;
  } catch (err) {
    alert("Claude API Error: " + err.message);
    return null;
  }
}

async function runDemo() {
  if (isRunning) return;
  isRunning = true;

  const output = document.getElementById('demoOutput');
  const progress = document.getElementById('demoProgress');
  const fill = document.querySelector('.progress-fill');
  document.getElementById('exportActions').style.display = 'none';

  output.innerHTML = '';
  progress.classList.add('active');
  fill.style.width = '10%';

  if (uploadedFileData) {
    // Real Processing via Claude
    output.innerHTML = '<div class="info">Sending data to Claude API...</div>';
    fill.style.width = '50%';
    
    const result = await processWithClaude(uploadedFileData);
    
    fill.style.width = '100%';
    if (result) {
      currentOutputText = result;
      // Convert text to HTML preserving spaces
      output.innerHTML = result.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
      document.getElementById('exportActions').style.display = 'flex';
    } else {
      output.innerHTML = '<div class="flag">Processing failed or cancelled.</div>';
    }
    
    setTimeout(() => {
      progress.classList.remove('active');
      isRunning = false;
    }, 400);

  } else {
    // Simulated Processing (Fallback)
    const data = demoData[currentDemo];
    let step = 0;
    const totalSteps = data.steps.length;

    function nextStep() {
      if (step >= totalSteps) {
        fill.style.width = '100%';
        setTimeout(() => {
          output.innerHTML = data.output;
          currentOutputText = data.output.replace(/<[^>]*>?/gm, ''); // plain text for export
          progress.classList.remove('active');
          document.getElementById('exportActions').style.display = 'flex';
          isRunning = false;
        }, 400);
        return;
      }

      const pct = ((step + 1) / totalSteps * 90);
      fill.style.width = pct + '%';
      const line = document.createElement('div');
      const text = data.steps[step];
      
      if (text.includes('⚠') || text.includes('FLAG') || text.includes('OVERDUE') || text.includes('NO MATCH')) line.style.color = '#ef4444';
      else if (text.includes('✓') || text.includes('Saved') || text.includes('Generating')) line.style.color = '#22c55e';
      else line.style.color = '#8888a0';
      
      line.textContent = text;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;

      step++;
      setTimeout(nextStep, 350 + Math.random() * 300);
    }
    nextStep();
  }
}

// ── Exports & Email ──

function downloadBlob(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById('exportQbo').addEventListener('click', () => {
  const iifData = `!TRNS	TRNSID	TRNSTYPE	DATE	ACCNT	NAME	CLASS	AMOUNT	DOCNUM	MEMO
!SPL	SPLID	TRNSTYPE	DATE	ACCNT	NAME	CLASS	AMOUNT	DOCNUM	MEMO
!ENDTRNS
TRNS		GENERAL JOURNAL	03/19/2026	Checking			0.00		Export from Cowork
ENDTRNS
` + currentOutputText;
  downloadBlob(iifData, 'export.iif', 'text/plain');
});

document.getElementById('exportXero').addEventListener('click', () => {
  const csvData = `Date,Amount,Payee,Description,Reference\n03/19/2026,0.00,Cowork Export,"${currentOutputText.slice(0, 50).replace(/\n/g, ' ')}",\n`;
  downloadBlob(csvData, 'xero_export.csv', 'text/csv');
});

document.getElementById('emailReport').addEventListener('click', () => {
  const subject = encodeURIComponent(`Accounting Report: ${currentDemo} skill`);
  const body = encodeURIComponent(`Here is the latest report from Claude Cowork:\n\n${currentOutputText}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});


// ── Stats Counter Animation ──

function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (target === 0) { el.textContent = '0'; return; }

    let current = 0;
    const increment = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 30);
  });
}

// Intersection observer for stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// ── Init ──

document.addEventListener('DOMContentLoaded', () => {
  animateHero();
  loadDemo('receipt');

  document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (!isRunning) loadDemo(tab.dataset.demo);
    });
  });

  document.getElementById('runDemo').addEventListener('click', runDemo);

  const statsSection = document.getElementById('stats');
  if (statsSection) statsObserver.observe(statsSection);
});
