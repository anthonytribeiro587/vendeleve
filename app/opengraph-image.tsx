import { ImageResponse } from "next/og";

export const alt = "VendeLeve - Gestão simples para pequenas lojas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const summaryCards = [
  { label: "Clientes ativos", value: "86", color: "#35231d" },
  { label: "Vendas do mês", value: "R$ 12.480", color: "#35231d" },
  { label: "A receber", value: "R$ 4.320", color: "#c47a00" },
  { label: "Atrasados", value: "R$ 780", color: "#d8343a" },
];

const charges = [
  { name: "Mariana Costa", value: "R$ 120,00" },
  { name: "Juliana Alves", value: "R$ 85,00" },
  { name: "Fernanda Lima", value: "R$ 60,00" },
];

const sales = ["Juliana Alves", "Mariana Costa", "Beatriz Souza"];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "linear-gradient(135deg, #fffaf6 0%, #f9e3d7 100%)",
        color: "#35231d",
        padding: 58,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "46%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 34,
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              border: "6px solid #d66b37",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d66b37",
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            VL
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: -3,
              }}
            >
              <span>Vende</span>
              <span style={{ color: "#d66b37" }}>Leve</span>
            </div>
            <span style={{ color: "#795f54", fontSize: 21 }}>
              Gestão simples para pequenas lojas
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 58,
            lineHeight: 1.04,
            fontWeight: 900,
            letterSpacing: -3,
          }}
        >
          <span>Organize clientes, vendas e recebimentos</span>
          <span style={{ color: "#d66b37" }}>em um só lugar.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "#795f54",
            fontSize: 25,
            lineHeight: 1.35,
          }}
        >
          Clientes, produtos, estoque, vendas, parcelas, vencimentos e relatórios.
        </div>
      </div>

      <div
        style={{
          width: "54%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 30,
        }}
      >
        <div
          style={{
            width: 585,
            height: 450,
            border: "2px solid #ead8cd",
            borderRadius: 28,
            background: "#fffdfa",
            boxShadow: "0 28px 70px rgba(86, 46, 28, 0.16)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <strong style={{ fontSize: 25 }}>Início</strong>
            <div style={{ display: "flex", gap: 9 }}>
              <span
                style={{
                  padding: "9px 16px",
                  border: "1px solid #ecdcd2",
                  borderRadius: 11,
                  fontSize: 14,
                }}
              >
                Novo cliente
              </span>
              <span
                style={{
                  padding: "9px 16px",
                  background: "#d66b37",
                  color: "white",
                  borderRadius: 11,
                  fontSize: 14,
                }}
              >
                Nova venda
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            {summaryCards.map((card) => (
              <div
                key={card.label}
                style={{
                  flex: 1,
                  padding: 15,
                  border: "1px solid #eee0d8",
                  borderRadius: 14,
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: 12, color: "#846f65" }}>{card.label}</span>
                <strong style={{ fontSize: 19, color: card.color }}>{card.value}</strong>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flex: 1 }}>
            <div
              style={{
                flex: 1,
                border: "1px solid #eee0d8",
                borderRadius: 15,
                background: "white",
                padding: 16,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong style={{ fontSize: 17 }}>Próximas cobranças</strong>
              {charges.map((charge) => (
                <div
                  key={charge.name}
                  style={{
                    marginTop: 13,
                    paddingTop: 11,
                    borderTop: "1px solid #f2e9e4",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                  }}
                >
                  <span>{charge.name}</span>
                  <strong>{charge.value}</strong>
                </div>
              ))}
            </div>

            <div
              style={{
                flex: 1,
                border: "1px solid #eee0d8",
                borderRadius: 15,
                background: "white",
                padding: 16,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong style={{ fontSize: 17 }}>Últimas vendas</strong>
              {sales.map((name) => (
                <div
                  key={name}
                  style={{
                    marginTop: 13,
                    paddingTop: 11,
                    borderTop: "1px solid #f2e9e4",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                  }}
                >
                  <span>{name}</span>
                  <span style={{ color: "#1ca653", fontWeight: 800 }}>Pago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
