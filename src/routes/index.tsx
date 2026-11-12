import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Leaf,
  Wheat,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import coverImage from "../assets/capa-agropecuaria.jpg";
import imgMeliponicultura from "../assets/verbetes/meliponicultura.jpg";
import imgSuinocultura from "../assets/verbetes/suinocultura.jpg";
import imgPiscicultura from "../assets/verbetes/piscicultura.jpg";
import imgOrdenhar from "../assets/verbetes/ordenhar.jpg";
import imgCaprinocultura from "../assets/verbetes/caprinocultura.jpg";
import imgInseminacao from "../assets/verbetes/inseminacao-artificial.jpg";
import imgCalagem from "../assets/verbetes/calagem.jpg";
import imgRuminantes from "../assets/verbetes/ruminantes.jpg";
import imgMatriz from "../assets/verbetes/matriz.jpg";
import imgFamacha from "../assets/verbetes/metodo-famacha.jpg";
import imgRumem from "../assets/verbetes/rumem.jpg";
import imgVermifugacao from "../assets/verbetes/vermifugacao.jpg";
import imgApicultura from "../assets/verbetes/apicultura.jpg";
import imgZootecnia from "../assets/verbetes/zootecnia.jpg";
import imgAgroecologia from "../assets/verbetes/agroecologia.jpg";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dicionário de Agropecuária" },
      {
        name: "description",
        content: "Conheça 15 conceitos essenciais da agricultura e da pecuária de forma simples e visual.",
      },
      { property: "og:title", content: "Dicionário de Agropecuária" },
      {
        property: "og:description",
        content: "Um glossário visual e educativo sobre o campo, o cultivo e a criação animal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Entry = {
  term: string;
  subtitle: string;
  definition: string;
  example: string;
  scene: string;
  image: string;
};

// Para trocar a imagem de um verbete, substitua o arquivo com o mesmo nome
// na pasta src/assets/verbetes/ (ex.: src/assets/verbetes/suinocultura.jpg).
const entries: Entry[] = [
  { term: "Meliponicultura", subtitle: "Meliponiculture", definition: "Criação racional de abelhas nativas sem ferrão para produção de mel, própolis, pólen e polinização de lavouras.", example: "As colmeias dessas abelhas ficam reunidas em um meliponário, na maior parte das vezes em caixas de madeira.", scene: "Abelhas sem ferrão", image: imgMeliponicultura },
  { term: "Suinocultura", subtitle: "Swine husbandry", definition: "Criação e manejo racional de porcos (suínos) voltados à produção de carne, banha e derivados.", example: "As granjas controlam alimentação, água e saúde dos suínos para obter boa produtividade.", scene: "Criação de suínos", image: imgSuinocultura },
  { term: "Piscicultura", subtitle: "Pisciculture", definition: "Ramo da aquicultura dedicado à criação e reprodução de peixes em ambientes controlados (como tanques de terra, tanques-rede ou açudes).", example: "Tilápias e tambacus são criados em tanques escavados no solo e em tanques-rede instalados em açudes.", scene: "Peixes em tanques", image: imgPiscicultura },
  { term: "Ordenhar", subtitle: "To extract milk", definition: "Processo de extração manual ou mecânica do leite das glândulas mamárias de fêmeas em lactação (como vacas, cabras e ovelhas).", example: "A ordenha acontece uma ou duas vezes por dia, sempre com muita higiene para garantir leite de qualidade.", scene: "Extração do leite", image: imgOrdenhar },
  { term: "Caprinocultura", subtitle: "Caprine production", definition: "Criação de cabras e bodes (caprinos) para produção de leite, carne, couro e derivados.", example: "O leite de cabra é usado para fabricar queijos, iogurtes e outros produtos regionais.", scene: "Criação de caprinos", image: imgCaprinocultura },
  { term: "Inseminação artificial", subtitle: "Artificial insemination", definition: "Técnica de reprodução assistida que consiste no depósito do sêmen do macho no trato reprodutivo da fêmea sem o acasalamento físico direto.", example: "O sêmen pode ser congelado e transportado para outras propriedades, melhorando a genética do rebanho.", scene: "Reprodução assistida", image: imgInseminacao },
  { term: "Calagem", subtitle: "Soil liming", definition: "Prática agrícola de aplicação de calcário no solo para neutralizar a acidez, eliminar o alumínio tóxico e fornecer cálcio e magnésio para as plantas.", example: "A análise do solo indica a quantidade de calcário necessária antes da aplicação.", scene: "Correção do solo", image: imgCalagem },
  { term: "Ruminantes", subtitle: "Ruminants", definition: "Mamíferos herbívoros (como bovinos, ovinos e caprinos) cujo estômago é dividido em compartimentos e que realizam a ruminação (regurgitação e remastigação do alimento).", example: "A vaca mastiga o alimento de novo, em momentos de descanso — o famoso 'ruminar'.", scene: "Ruminação do alimento", image: imgRuminantes },
  { term: "Matriz", subtitle: "Breeding female", definition: "Fêmea reprodutora de bom padrão genético mantida na propriedade com a finalidade de gerar filhotes e manter ou expandir o rebanho.", example: "Uma boa matriz gera filhotes mais resistentes e com melhor ganho de peso.", scene: "Fêmea reprodutora", image: imgMatriz },
  { term: "Método Famacha", subtitle: "Famacha method", definition: "Guia visual da mucosa ocular de ovinos e caprinos para avaliar o grau de anemia e orientar a vermifugação seletiva contra o parasita Haemonchus contortus.", example: "Mucosa ocular clara indica anemia e ajuda o criador a vermifugar apenas os animais necessários.", scene: "Avaliação da anemia", image: imgFamacha },
  { term: "Rumem", subtitle: "Rumen", definition: "O rúmen (também chamado de pança ou rume) é o primeiro e maior compartimento do estômago dos animais ruminantes, como bovinos, ovinos, caprinos e cervídeos. Ele funciona como uma grande câmara de fermentação biológica que permite a esses animais digerir alimentos ricos em fibras vegetais", example: "Uma bolsa enorme (em uma vaca adulta, cabe mais de 150 litros) cheia de bilhões de microrganismos do bem, como bactérias e fungos.", scene: "Rúmem", image: imgRumem },
  { term: "Vermifugação", subtitle: "Deworming", definition: "Manejo sanitário de controle de endoparasitas em rebanhos via anti-helmínticos. Previne a contaminação do pasto, quadros de anemia e perdas produtivas (carne, leite e ovos), garantindo a saúde do lote.", example: "A dose do vermífugo é calculada pelo peso do animal e aplicada de forma estratégica ao longo do ano.", scene: "Controle de parasitas", image: imgVermifugacao },
  { term: "Apicultura", subtitle: "Apiculture", definition: "Manejo racional de abelhas (especialmente Apis mellifera) voltado à extração sustentável de produtos da colmeia (mel, própolis, cera, geleia real, pólen e apitoxina) e ao aumento da produtividade agrícola por meio da polinização assistida.", example: "O apicultor usa macacão e fumigador para retirar os quadros de mel sem prejudicar as abelhas.", scene: "Manejo de colmeias", image: imgApicultura },
  { term: "Zootecnia", subtitle: "Zootechnics", definition: "Ciência da produção animal que visa otimizar a eficiência, a rentabilidade e o bem-estar dos rebanhos. Integra nutrição, melhoramento genético, reprodução, instalações, sanidade preventiva e gestão econômica dos sistemas produtivos.", example: "O zootecnista calcula a dieta do rebanho leiteiro para aumentar a produção de leite.", scene: "Ciência da produção animal", image: imgZootecnia },
  { term: "Agroecologia", subtitle: "Agroecology", definition: "Aplicação de conceitos ecológicos ao manejo de agroecossistemas. Promove a produção agropecuária por meio da preservação da biodiversidade, ciclagem natural de nutrientes e conservação do solo e da água, reduzindo ou eliminando o uso de insumos químicos sintéticos.", example: "Plantar culturas variadas juntas e usar composto orgânico no lugar de adubos químicos são práticas agroecológicas.", scene: "Produção com a natureza", image: imgAgroecologia },
];

const participants = [
  "Dário Augusto",
  "Tiago Francisco",
  "Matheus Neves",
  "Lucas Rafael",
  "João Emanuel",
  "Davi Caldera",
  "Taylon Miranda",
];

function Index() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const touchStart = useRef<number | null>(null);
  const glossaryRef = useRef<HTMLElement>(null);

  const goTo = useCallback((nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= entries.length) return;
    setDirection(nextIndex > current ? "next" : "previous");
    setCurrent(nextIndex);
  }, [current]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(current + 1);
      if (event.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, goTo]);

  const entry = entries[current];
  if (!entry) return null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden">
        <img src={coverImage} alt="Plantação verde diante de montanhas no campo" width={1920} height={1080} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-wash" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] text-hero-foreground">Dicionário de<br />Agropecuária</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-hero-foreground/85 sm:text-lg">Quinze palavras para conhecer melhor o cultivo da terra, a criação de animais e o cuidado com o campo.</p>
            <Button className="mt-8" onClick={() => glossaryRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Começar <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section ref={glossaryRef} id="verbetes" className="relative scroll-mt-4 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="field-label">Glossário ilustrado</p>
              <h2 className="mt-2 font-display text-4xl leading-none sm:text-5xl">Palavras do campo</h2>
            </div>
            <span className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><ArrowLeft className="size-4" /> use as setas <ArrowRight className="size-4" /></span>
          </div>

          <div
            className="relative"
            onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const end = event.changedTouches[0]?.clientX ?? touchStart.current;
              const distance = touchStart.current - end;
              if (Math.abs(distance) > 45) goTo(current + (distance > 0 ? 1 : -1));
              touchStart.current = null;
            }}
          >
            <article key={current} className={`slide-panel slide-${direction}`} aria-live="polite">
              <div className="slide-copy">
                <div className="flex items-center justify-between">
                  <span className="field-label">Verbete {String(current + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{current + 1} de {entries.length}</span>
                </div>
                <h3 className="mt-7 font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.94]">{entry.term}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-accent sm:text-base">{entry.subtitle}</p>
                <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed sm:text-2xl">{entry.definition}</p>
                <div className="mt-7 border-l-2 border-accent pl-4 sm:pl-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Na prática</p>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{entry.example}</p>
                </div>
              </div>

              <div className="field-illustration" aria-label={`Ilustração: ${entry.scene}`}>
                <img src={entry.image} alt={entry.scene} className="absolute inset-0 h-full w-full object-cover" />
                <span className="field-caption">{entry.scene}</span>
              </div>
            </article>

            <Button variant="arrow" size="icon" aria-label="Verbete anterior" disabled={current === 0} onClick={() => goTo(current - 1)} className="slide-arrow slide-arrow-left">
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="arrow" size="icon" aria-label="Próximo verbete" disabled={current === entries.length - 1} onClick={() => goTo(current + 1)} className="slide-arrow slide-arrow-right">
              <ArrowRight className="size-5" />
            </Button>
          </div>

          <div className="mt-5">
            <div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${((current + 1) / entries.length) * 100}%` }} /></div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground sm:hidden"><ArrowLeft className="size-4" /><span>Deslize para navegar</span><ArrowRight className="size-4" /></div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/45 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Wheat className="size-7" /></div>
          <p className="field-label mt-6">Fim da jornada</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Conhecer o campo é cultivar o futuro.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Cada palavra revela um pouco de como alimentos, fibras e recursos chegam até nós.</p>

          <div className="mt-16 border-t border-border pt-10">
            <p className="field-label">Participantes</p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-y-4">
              {participants.map((name) => <p key={name} className="w-1/2 text-center text-sm font-semibold sm:w-1/3 sm:text-base">{name}</p>)}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5 shadow-[var(--shadow-field)] sm:gap-4 sm:px-5 sm:py-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:size-9">
            <GraduationCap className="size-4 sm:size-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">Feito por alunos</span>
            <span className="block font-display text-base text-primary sm:text-xl">IFNMG</span>
          </span>
          <Leaf className="size-4 text-accent sm:size-5" aria-hidden />
        </div>
      </div>
    </main>
  );
}
