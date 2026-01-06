let currentInput = '';
let expression = '';
let result = '0';
let history = [];

function updateDisplay() {
    document.getElementById('expression').textContent = expression;
    document.getElementById('result').textContent = result;
}

function appendNumber(num) {
    if (result !== '0' && expression.includes('=')) {
        clearAll();
    }
    
    if (num === '.' && currentInput.includes('.')) {
        return;
    }
    
    currentInput += num;
    expression = expression.replace(/=$/, '') + num;
    result = currentInput;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && expression === '' && op !== '-') {
        return;
    }
    
    if (expression.includes('=')) {
        expression = result;
    }
    
    if (currentInput !== '' || op === '-') {
        if (expression.slice(-1).match(/[+\-*/%]/)) {
            expression = expression.slice(0, -1);
        }
        expression += op;
        currentInput = '';
        updateDisplay();
    }
}

function toggleSign() {
    if (currentInput !== '' && currentInput !== '0') {
        if (currentInput.startsWith('-')) {
            currentInput = currentInput.substring(1);
        } else {
            currentInput = '-' + currentInput;
        }
        result = currentInput;
        
        const lastOpIndex = Math.max(
            expression.lastIndexOf('+'),
            expression.lastIndexOf('-', expression.length - 2),
            expression.lastIndexOf('*'),
            expression.lastIndexOf('/'),
            expression.lastIndexOf('%')
        );
        
        if (lastOpIndex >= 0) {
            expression = expression.substring(0, lastOpIndex + 1) + currentInput;
        } else {
            expression = currentInput;
        }
        
        updateDisplay();
    }
}

function calculate() {
    if (expression === '' || expression.includes('=')) {
        return;
    }
    
    try {
        let evalExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');
        
        let calcResult = eval(evalExpression);
        
        if (calcResult === Infinity || calcResult === -Infinity) {
            result = 'Error';
        } else {
            result = String(Math.round(calcResult * 100000000) / 100000000);
            
            // Add to history
            history.unshift({
                expression: expression,
                result: result
            });
            
            if (history.length > 50) {
                history = history.slice(0, 50);
            }
            
            updateHistory();
        }
        
        expression += '=';
        currentInput = result;
        updateDisplay();
    } catch (error) {
        result = 'Error';
        updateDisplay();
    }
}

function clearAll() {
    currentInput = '';
    expression = '';
    result = '0';
    updateDisplay();
}

function toggleTheme() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const historyPanel = document.getElementById('historyPanel');
    const themeBtn = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        calculator.classList.remove('light');
        calculator.classList.add('dark');
        historyPanel.classList.add('dark');
        themeBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        calculator.classList.remove('dark');
        calculator.classList.add('light');
        historyPanel.classList.remove('dark');
        themeBtn.textContent = '🌙';
    }
}

function toggleHistory() {
    const panel = document.getElementById('historyPanel');
    panel.classList.toggle('open');
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
        historyList.innerHTML = '<div class="no-history">No calculations yet</div>';
        return;
    }
    
    historyList.innerHTML = history.map((item, index) => `
        <div class="history-item" onclick="loadFromHistory(${index})">
            <div class="history-expression">${item.expression}</div>
            <div class="history-result">= ${item.result}</div>
        </div>
    `).join('');
}

function loadFromHistory(index) {
    const item = history[index];
    expression = item.expression.replace('=', '');
    result = item.result;
    currentInput = result;
    updateDisplay();
    toggleHistory();
}

function clearHistory() {
    history = [];
    updateHistory();
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendNumber('.');
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        appendOperator(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        clearAll();
    } else if (e.key === 'Backspace') {
        if (currentInput !== '') {
            currentInput = currentInput.slice(0, -1);
            result = currentInput || '0';
        }
        expression = expression.slice(0, -1);
        updateDisplay();
    }
});

// Initialize
updateDisplay();
updateHistory();