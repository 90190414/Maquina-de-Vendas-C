
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showOptions, setShowOptions] = useState(false);

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
    if (step === questions.length - 1) {
      setShowOptions(true);
    }
  };

  const questions = [
    { key: "tipo", text: "Qual o seu tipo de negócio?" },
    { key: "clientes", text: "Quantos clientes você tem por mês, em média?" },
    { key: "anuncios", text: "Você já investiu em anúncios antes?" },
    { key: "presenca", text: "Seu negócio está ativo no Instagram ou Facebook?" },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>🚀 Diagnóstico - Máquina de Vendas C</h1>
      {step < questions.length && (
        <div>
          <p>{questions[step].text}</p>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                handleAnswer(questions[step].key, e.target.value);
                e.target.value = "";
              }
            }}
            placeholder="Digite sua resposta e pressione Enter"
          />
        </div>
      )}

      {showOptions && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Diagnóstico completo!</strong></p>
          <p>
            Seu negócio tem grande potencial. Uma das estratégias mais eficazes é o <strong>tráfego pago</strong> — exatamente o que ensino no meu curso.
          </p>
          <a href="https://ecossistemac.com.br/maquina-de-vendas-c/" target="_blank">📄 Ver página de vendas</a><br />
          <a href="https://pay.kiwify.com.br/HgZAgCT" target="_blank">💳 Ir para o checkout</a><br />
          <a href="https://wa.me/5547997032586" target="_blank">💬 Falar comigo no WhatsApp</a>
        </div>
      )}
    </div>
  );
}
