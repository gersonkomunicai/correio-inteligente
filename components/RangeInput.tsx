'use client'
import { useMemo, useState } from "react";

// ---------------------------------------------------------------------------
// Config do domínio (ajuste esses números conforme os planos reais)
// ---------------------------------------------------------------------------
const CUSTOM_MIN = 100_000;
const CUSTOM_MAX = 1_000_000;
const PRICE_PER_MESSAGE = 0.29;
const SLIDER_STEPS = 1000; // resolução "neutra" do input range
const DEFAULT_MESSAGES = 100_000;

// ---------------------------------------------------------------------------
// Matemática da escala log
// ---------------------------------------------------------------------------
const logMin = Math.log(CUSTOM_MIN);
const logMax = Math.log(CUSTOM_MAX);
const scale = (logMax - logMin) / SLIDER_STEPS;

function roundToHumanStep(value: number): number {
  if (value < 100_000) return Math.round(value / 1_000) * 1_000;
  if (value < 500_000) return Math.round(value / 5_000) * 5_000;
  return Math.round(value / 10_000) * 10_000;
}

function positionToValue(position: number): number {
  const raw = Math.exp(logMin + scale * position);
  const clamped = Math.min(CUSTOM_MAX, Math.max(CUSTOM_MIN, raw));
  return roundToHumanStep(clamped);
}

function valueToPosition(value: number): number {
  const clamped = Math.min(CUSTOM_MAX, Math.max(CUSTOM_MIN, value));
  return (Math.log(clamped) - logMin) / scale;
}

// ---------------------------------------------------------------------------
// Formatação
// ---------------------------------------------------------------------------
const numberFormatter = new Intl.NumberFormat("pt-BR");
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------
export default function PlanVolumeSlider() {
  const [messages, setMessages] = useState<number>(DEFAULT_MESSAGES);

  const sliderPosition = useMemo(() => valueToPosition(messages), [messages]);
  const fillPercent = (sliderPosition / SLIDER_STEPS) * 100;

  const totalPrice = useMemo(
    () => messages * PRICE_PER_MESSAGE,
    [messages]
  );

  function handleSliderChange(position: number) {
    setMessages(positionToValue(position));
  }

  return (
    <div className="w-full max-w-xl space-y-4 rounded-2xl py-8 pr-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-correio-inteligente-200">Quantidade de mensagens</span>
        <span className="font-semibold text-correio-inteligente-200">
          {numberFormatter.format(messages)}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={SLIDER_STEPS}
        step={1}
        value={sliderPosition}
        onChange={(e) => handleSliderChange(e.target.valueAsNumber)}
        style={
          {
            background: `linear-gradient(to right, rgb(2, 39, 36) ${fillPercent}%, rgb(226 232 240) ${fillPercent}%)`,
          } as React.CSSProperties
        }
        className="h-2 w-full cursor-pointer appearance-none rounded-full
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-correio-inteligente-200
          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-correio-inteligente-200
          [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow"
      />

      <div className="flex justify-between text-xs text-correio-inteligente-200">
        <span>{numberFormatter.format(CUSTOM_MIN)}</span>
        <span>{numberFormatter.format(CUSTOM_MAX)}</span>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-correio-inteligente-200">Total estimado</span>
        <span className="text-xl font-bold text-correio-inteligente-200">
          {currencyFormatter.format(totalPrice)}
        </span>
      </div>
    </div>
  );
}