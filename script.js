// --- SUA URL DO GOOGLE APPS SCRIPT ---
const API_URL = "https://script.google.com/macros/s/AKfycbyuH28xFDkO_FBK8WIt10HQ8TJW-T1d7F88SvjdL_dhechJ8k9-L2wlqpxLDZrfubqa/exec"; 

if (!API_URL.includes("http")) { alert("ERRO: Cole a URL do Google Script no script.js!"); }

// --- BANCO DE DADOS: 100 QUESTÕES ---
const fullQuestionBank = [
    // Nível 1: Básico
    { eq: "x + 5 = 12", ans: "7", level: "Básico" },
    { eq: "x - 4 = 10", ans: "14", level: "Básico" },
    { eq: "3x = 15", ans: "5", level: "Básico" },
    { eq: "2x = 10", ans: "5", level: "Básico" },
    { eq: "x + 8 = 3", ans: "-5", level: "Básico" },
    { eq: "-x = 5", ans: "-5", level: "Básico" },
    { eq: "4x = -16", ans: "-4", level: "Básico" },
    { eq: "5x + 2 = 12", ans: "2", level: "Básico" },
    { eq: "3x - 1 = 8", ans: "3", level: "Básico" },
    { eq: "10 - x = 4", ans: "6", level: "Básico" },
    { eq: "2x + 10 = 20", ans: "5", level: "Básico" },
    { eq: "x - 20 = 5", ans: "25", level: "Básico" },
    { eq: "6x = 0", ans: "0", level: "Básico" },
    { eq: "-2x + 1 = 9", ans: "-4", level: "Básico" },
    { eq: "8x = 64", ans: "8", level: "Básico" },
    { eq: "x + 7 = 7", ans: "0", level: "Básico" },
    { eq: "5x = -25", ans: "-5", level: "Básico" },
    { eq: "2x - 3 = 7", ans: "5", level: "Básico" },
    { eq: "4 - x = 6", ans: "-2", level: "Básico" },
    { eq: "3x + 5 = 14", ans: "3", level: "Básico" },
    { eq: "x + 10 = 25", ans: "15", level: "Básico" },
    { eq: "2x = -10", ans: "-5", level: "Básico" },
    { eq: "-x + 4 = 4", ans: "0", level: "Básico" },
    { eq: "7x = 7", ans: "1", level: "Básico" },
    { eq: "x - 9 = -9", ans: "0", level: "Básico" },
    { eq: "3x + 2 = 17", ans: "5", level: "Básico" },
    { eq: "5x - 5 = 20", ans: "5", level: "Básico" },
    { eq: "6 - x = 10", ans: "-4", level: "Básico" },
    { eq: "2x + 8 = 0", ans: "-4", level: "Básico" },
    { eq: "4x = 1", ans: "0.25", level: "Básico" },

    // Nível 2: Intermediário
    { eq: "2x = x + 5", ans: "5", level: "Intermediário" },
    { eq: "5x = 3x + 10", ans: "5", level: "Intermediário" },
    { eq: "4x - 2 = 2x + 8", ans: "5", level: "Intermediário" },
    { eq: "7x - 5 = 5x + 9", ans: "7", level: "Intermediário" },
    { eq: "3x + 2 = x + 8", ans: "3", level: "Intermediário" },
    { eq: "6x - 10 = 2x + 10", ans: "5", level: "Intermediário" },
    { eq: "8x + 4 = 4x + 20", ans: "4", level: "Intermediário" },
    { eq: "x + 5 = 2x - 3", ans: "8", level: "Intermediário" },
    { eq: "5x - 4 = 4x + 1", ans: "5", level: "Intermediário" },
    { eq: "10x = 5x + 25", ans: "5", level: "Intermediário" },
    { eq: "3x - 1 = x + 9", ans: "5", level: "Intermediário" },
    { eq: "2x + 4 = x + 10", ans: "6", level: "Intermediário" },
    { eq: "5x + 2 = 2x + 11", ans: "3", level: "Intermediário" },
    { eq: "4x - 4 = 3x + 2", ans: "6", level: "Intermediário" },
    { eq: "8x - 10 = 4x + 10", ans: "5", level: "Intermediário" },
    { eq: "6x + 5 = 4x + 15", ans: "5", level: "Intermediário" },
    { eq: "9x - 2 = 3x + 16", ans: "3", level: "Intermediário" },
    { eq: "7x + 1 = 5x + 11", ans: "5", level: "Intermediário" },
    { eq: "x + x = 18", ans: "9", level: "Intermediário" },
    { eq: "3x - x = 12", ans: "6", level: "Intermediário" },
    { eq: "5x + 3 = 2x + 18", ans: "5", level: "Intermediário" },
    { eq: "4x + 6 = x + 21", ans: "5", level: "Intermediário" },
    { eq: "2x - 10 = -x + 5", ans: "5", level: "Intermediário" },
    { eq: "x + 4 = 3x - 6", ans: "5", level: "Intermediário" },
    { eq: "10x + 5 = 5x + 30", ans: "5", level: "Intermediário" },
    { eq: "-2x + 10 = x + 1", ans: "3", level: "Intermediário" },
    { eq: "3x + 10 = x", ans: "-5", level: "Intermediário" },
    { eq: "5x = x + 24", ans: "6", level: "Intermediário" },
    { eq: "8x - 4 = 6x + 8", ans: "6", level: "Intermediário" },
    { eq: "2x + 6 = -x + 15", ans: "3", level: "Intermediário" },

    // Nível 3: Avançado
    { eq: "2(x + 1) = 10", ans: "4", level: "Avançado" },
    { eq: "3(x - 2) = 9", ans: "5", level: "Avançado" },
    { eq: "5(x + 2) = 20", ans: "2", level: "Avançado" },
    { eq: "2(x + 3) = 14", ans: "4", level: "Avançado" },
    { eq: "4(x - 1) = 12", ans: "4", level: "Avançado" },
    { eq: "x/2 = 5", ans: "10", level: "Avançado" },
    { eq: "x/3 + 1 = 4", ans: "9", level: "Avançado" },
    { eq: "2(x + 5) = 20", ans: "5", level: "Avançado" },
    { eq: "3(2x - 1) = 15", ans: "3", level: "Avançado" },
    { eq: "4(x + 2) = 2(x + 6)", ans: "2", level: "Avançado" },
    { eq: "5(x - 1) = 2x + 4", ans: "3", level: "Avançado" },
    { eq: "10(x - 2) = 50", ans: "7", level: "Avançado" },
    { eq: "2x + 3(x + 1) = 18", ans: "3", level: "Avançado" },
    { eq: "x/4 = 3", ans: "12", level: "Avançado" },
    { eq: "x/5 + 2 = 6", ans: "20", level: "Avançado" },
    { eq: "2(x - 3) + 4 = 10", ans: "6", level: "Avançado" },
    { eq: "3(x + 1) - 3 = 12", ans: "4", level: "Avançado" },
    { eq: "-(x + 5) = -10", ans: "5", level: "Avançado" },
    { eq: "x/2 + x/2 = 8", ans: "8", level: "Avançado" },
    { eq: "3x/2 = 9", ans: "6", level: "Avançado" },

    // Nível 4: Casos Especiais (Pegadinhas)
    { eq: "x + 5 = x + 8", ans: "SI", level: "Pegadinha" },
    { eq: "2x + 3 = 2x + 10", ans: "SI", level: "Pegadinha" },
    { eq: "5x + 10 = 5x + 10", ans: "SPI", level: "Pegadinha" },
    { eq: "2(x + 1) = 2x + 2", ans: "SPI", level: "Pegadinha" },
    { eq: "x = x + 1", ans: "SI", level: "Pegadinha" },
    { eq: "3x = 3x", ans: "SPI", level: "Pegadinha" },
    { eq: "x + x = 2x", ans: "SPI", level: "Pegadinha" },
    { eq: "0x = 5", ans: "SI", level: "Pegadinha" },
    { eq: "0x = 0", ans: "SPI", level: "Pegadinha" },
    { eq: "2x + 1 = 2x + 5", ans: "SI", level: "Pegadinha" },
    { eq: "4x + 4 = 4(x + 1)", ans: "SPI", level: "Pegadinha" },
    { eq: "x + 10 = x - 5", ans: "SI", level: "Pegadinha" },
    { eq: "3(x + 2) = 3x + 6", ans: "SPI", level: "Pegadinha" },
    { eq: "5x - 5 = 5(x - 1)", ans: "SPI", level: "Pegadinha" },
    { eq: "-x + 1 = -x + 2", ans: "SI", level: "Pegadinha" },
    { eq: "2x - 2x = 4", ans: "SI", level: "Pegadinha" },
    { eq: "10x - 10x = 0", ans: "SPI", level: "Pegadinha" },
    { eq: "x + 2 = x + 2", ans: "SPI", level: "Pegadinha" },
    { eq: "x/2 = x/2 + 1", ans: "SI", level: "Pegadinha" },
    { eq: "1 = 2", ans: "SI", level: "Pegadinha" }
];

let availableQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Lista para guardar as tentativas do usuário na questão atual
let userAttemptsLog = []; 

const dom = {
    eqDisplay: document.getElementById('equation-display'),
    input: document.getElementById('user-answer'),
    feedback: document.getElementById('feedback-msg'),
    actionBtn: document.getElementById('action-btn'),
    skipBtn: document.getElementById('skip-btn'),
    progressBar: document.getElementById('progress-bar'),
    questionCount: document.getElementById('question-count'),
    scoreDisplay: document.getElementById('score-display'),
    badge: document.getElementById('level-badge'),
    loading: document.getElementById('loading-overlay')
};

// --- INICIALIZAÇÃO ---
function init() {
    fetch(API_URL)
        .then(res => res.json())
        .then(questoesFeitas => {
            console.log("Histórico carregado:", questoesFeitas);
            startApp(questoesFeitas);
        })
        .catch(err => {
            console.error(err);
            startApp([]);
        });
}

function startApp(questoesFeitas) {
    availableQuestions = fullQuestionBank.filter(q => !questoesFeitas.includes(q.eq));
    availableQuestions = shuffleArray(availableQuestions);
    
    dom.loading.style.opacity = '0';
    setTimeout(() => dom.loading.style.display = 'none', 500);

    if (availableQuestions.length === 0) {
        finishGame("Todas as questões já foram respondidas!");
        return;
    }
    currentQuestionIndex = 0; score = 0;
    loadQuestion();
    setupListeners();
}

// --- FUNÇÃO DE ENVIO ---
function enviarDados(questao, gabarito, status, tentativasLog) {
    const dados = { 
        questao: questao, 
        gabarito: gabarito, 
        status: status, 
        tentativas: tentativasLog // Envia a string formatada "x | y | z"
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dados) 
    }).then(res => console.log("Dados salvos!"))
      .catch(err => console.error("Erro ao salvar", err));
}

function setupListeners() {
    dom.input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer(); });
    dom.actionBtn.addEventListener('click', () => {
        if(dom.actionBtn.textContent.includes("Verificar") || dom.actionBtn.textContent.includes("Tentar")) checkAnswer();
        else nextQuestion();
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função auxiliar para mostrar o texto amigável ao aluno
function formatAnswerText(ans) {
    if (ans === "SI") return "Sem Solução";
    if (ans === "SPI") return "Infinitas Soluções";
    return ans;
}

function loadQuestion() {
    if (currentQuestionIndex >= availableQuestions.length) {
        finishGame("Você completou todas as questões!");
        return;
    }
    const q = availableQuestions[currentQuestionIndex];
    
    // Reseta o log de tentativas para a nova pergunta
    userAttemptsLog = []; 
    
    dom.eqDisplay.textContent = q.eq;
    dom.badge.textContent = `Nível: ${q.level}`;
    dom.badge.style.background = getBadgeColor(q.level);
    dom.input.value = ""; dom.input.disabled = false;
    dom.input.classList.remove('input-correct', 'input-error');
    dom.input.focus();
    dom.feedback.textContent = "";
    dom.actionBtn.textContent = "Verificar";
    dom.skipBtn.disabled = false;
    updateStats();
}

function insertSpecial(value) { dom.input.value = value; dom.input.focus(); }

function skipQuestion() {
    if(!confirm("Tem certeza que deseja pular?")) return;
    const q = availableQuestions[currentQuestionIndex];
    
    // Salva o que ele tentou até agora, ou "Nenhuma" se não digitou nada
    const logFinal = userAttemptsLog.length > 0 ? userAttemptsLog.join(" | ") : "Nenhuma";
    
    enviarDados(q.eq, q.ans, "PULOU", logFinal);

    // Mostra a resposta formatada (Sem Solução em vez de SI)
    const formattedAns = formatAnswerText(q.ans);
    dom.feedback.innerHTML = `<span style="color: var(--warning)">⏭️ Questão Pulada. Resposta era: ${formattedAns}</span>`;
    
    dom.input.disabled = true; dom.skipBtn.disabled = true;
    dom.actionBtn.textContent = "Próxima Questão ➔";
}

function checkAnswer() {
    if (dom.input.disabled) return;
    const q = availableQuestions[currentQuestionIndex];
    const rawVal = dom.input.value.trim(); // O que o usuário digitou
    const userVal = rawVal.toLowerCase();
    const correctVal = q.ans.toLowerCase();
    
    // Adiciona ao log se não estiver vazio
    if(rawVal !== "") {
        userAttemptsLog.push(rawVal);
    }

    let isCorrect = false;

    if (correctVal === "si") { if (userVal.includes("sem") || userVal.includes("impossivel")) isCorrect = true; } 
    else if (correctVal === "spi") { if (userVal.includes("infinitas") || userVal.includes("identidade")) isCorrect = true; } 
    else { const numUser = userVal.replace(/[^0-9-]/g, ''); if (numUser === correctVal) isCorrect = true; }

    // Prepara a string para o Excel (ex: "4 | 6 | 7")
    const logString = userAttemptsLog.join(" | ");

    if (isCorrect) {
        score++;
        dom.feedback.innerHTML = "<span class='correct-anim'>✨ Correto! Muito bem.</span>";
        dom.input.classList.remove('input-error'); dom.input.classList.add('input-correct');
        dom.input.disabled = true; dom.skipBtn.disabled = true;
        dom.actionBtn.textContent = "Próxima Questão ➔";
        
        enviarDados(q.eq, q.ans, "ACERTOU", logString);
        updateStats();
    } else {
        const hint = getHint(q.eq, q.ans);
        dom.feedback.innerHTML = `<div class='hint-text'><span class='hint-title'>❌ Resposta Incorreta</span>${hint}</div>`;
        dom.input.classList.add('input-error');
        dom.actionBtn.textContent = "Tentar Novamente";
        setTimeout(() => dom.input.classList.remove('input-error'), 500);
    }
}

function getHint(equation, correctVal) {
    if (correctVal === "SI") return "Se chegar em algo impossível como '0 = 5', não tem solução.";
    if (correctVal === "SPI") return "Se chegar em algo óbvio como '0 = 0', são infinitas soluções.";
    if (equation.includes("(")) return "Dica: Primeiro use a propriedade distributiva (chuveirinho).";
    if (equation.includes("/")) return "Dica: O número dividindo passa multiplicando.";
    const parts = equation.split('=');
    if (parts[1] && parts[1].includes('x')) return "Dica: Junte os termos com 'x' de um lado e números do outro.";
    if (equation.trim().startsWith("-x") || equation.trim().startsWith("-2x")) return "Dica: Se o x for negativo, multiplique tudo por -1.";
    return "Dica: Isole o x. Quem soma passa subtraindo, quem multiplica passa dividindo.";
}

function nextQuestion() { currentQuestionIndex++; loadQuestion(); }

function updateStats() {
    const total = availableQuestions.length;
    dom.questionCount.textContent = `Questão ${currentQuestionIndex + 1}/${total}`;
    dom.scoreDisplay.textContent = `Acertos: ${score}`;
    const pct = ((currentQuestionIndex) / total) * 100;
    dom.progressBar.style.width = `${pct}%`;
}

function getBadgeColor(level) {
    if (level === "Básico") return "#e0e7ff";
    if (level === "Intermediário") return "#fef3c7";
    if (level === "Avançado") return "#ffedd5";
    return "#fee2e2";
}

function finishGame(msg) {
    dom.progressBar.style.width = "100%";
    const card = document.querySelector('.card');
    card.innerHTML = `<div style="font-size: 3rem; margin-bottom: 20px;">🏆</div><h2>Desafio Concluído!</h2><p style="margin: 20px 0; font-size: 1.2rem;">${msg}</p><p>Acertos na sessão: <strong>${score}</strong></p><button class="btn-primary" onclick="location.reload()">Sincronizar e Jogar Novamente</button>`;
}

init();