/* eslint-disable jsx-a11y/iframe-has-title */
// import React, { useEffect, useState } from "react";
import React from "react";

import * as Styled from "./styles";

import garota from "../../assets/img/garota.png";
import hat from "../../assets/icons/hat.png";
import AnaJulia from "../../assets/img/garota/AnaJulia.jpeg";
import EvaDe from "../../assets/img/garota/EvaDe.jpeg";
import PaulaBeatriz from "../../assets/img/garota/PaulaBeatriz.jpeg";
import EloisaRabelo from "../../assets/img/garota/EloisaRabelo.jpeg";
import BrunnaLet from "../../assets/img/garota/BrunnaLet.jpeg";
import Eukelly from "../../assets/img/garota/Eukelly.jpeg";
import RaissaRosa from "../../assets/img/garota/RaissaRosa.jpeg";
import IsadoraLeao from "../../assets/img/garota/IsadoraLeao.jpeg";
import Kaylane from "../../assets/img/garota/Kaylane.jpeg";
import MariaEduarda from "../../assets/img/garota/MariaEduarda.jpeg";
import TamaraLopes from "../../assets/img/garota/TamaraLopes.jpeg";
import IzadoraVidal from "../../assets/img/garota/IzadoraVidal.jpeg";
import ElisaArbues from "../../assets/img/garota/ElisaArbues.jpeg";
import KauannyAraujo from "../../assets/img/garota/KauannyAraujo.jpeg";
import JuliaLays from "../../assets/img/garota/JuliaLays.jpeg";
import LaraFabia from "../../assets/img/garota/LaraFabia.jpeg";
import BrunaEduarda from "../../assets/img/garota/BrunaEduarda.jpeg";
import TalistaAlves from "../../assets/img/garota/TalistaAlves.jpeg";
import Welida from "../../assets/img/garota/Welida.jpeg";
import JulianaRibeiro from "../../assets/img/garota/JulianaRibeiro.jpeg";
import AmandaEula from "../../assets/img/garota/AmandaEula.jpeg";
import Inaria from "../../assets/img/garota/Inaria.jpeg";
import MaressaFarias from "../../assets/img/garota/MaressaFarias.jpeg";
import MariaEdu from "../../assets/img/garota/MariaEdu.jpeg";
import carmemodel from "../../assets/img/garota/carmemodel.jpeg";
import beatryzsantos from "../../assets/img/garota/beatryzsantos.jpeg";
import Larasouza from "../../assets/img/garota/Larasouza.jpeg";
import carolpires_20 from "../../assets/img/garota/carolpires_20.jpeg";
import dudaah_santos062 from "../../assets/img/garota/dudaah_santos062.jpeg";
import casseblarissa from "../../assets/img/garota/casseblarissa.jpeg";

import Footer from "../../components/footer";
import { useHistory } from "react-router";
// import // addVoto,
// getGarota,
// listGarota,
// "../../backend/controllers/garota";

const Garota: React.FC = () => {
  // const Vote = async (key: number) => {
  //   localStorage.setItem("voted", "true");
  //   try {
  //     const result = garotaState.find((aux) => aux.Key === key);
  //     const res = await getGarota(result.id);
  //     if (res) {
  //       const final = res.Vote + 1;
  //       await addVoto();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const info = [
    {
      nome: "Ana Júlia Bernardes Morais Aires",
      texto:
        "Sou Criadora de Conteúdo Maquiadora e Empreendedora, em resumo mulher que corre atrás dos sonhos e faz acontecer, Bruta no estilo e delicada no modo de ser.",
      ig: "diariodeumabruta",
      idade: "",
      cidade: "",
      img: AnaJulia,
    },
    {
      nome: "Eva de Vasconcelos Caetano",
      texto:
        "Me chamo Eva de Vasconcelos Caetano, tenho 23 anos, nascida e criada no sul do Pará, lugar onde desde pequena fui ensinada a amar e respeitar tudo aquilo que faz parte da minha história! O muar é sem duvidas um deles, por isso a mais de 8 anos o encontro nacional de muladeiros em Iporá, é o evento onde decidimos reunir a família para cultivar e celebrar a tradição que nos mantém vivos de alma! Por esse motivo me sinto capaz de representar o lugar de garota amog 2022 🤠(V)❤️",
      ig: "evavcaetano",
      idade: "23",
      cidade: "",
      img: EvaDe,
    },
    {
      nome: "Paula Beatriz lira Borges",
      texto:
        "Sou uma pessoa simpática e muito carismática, adoro a vida no campo, meu objetivo maior que creio eu que seja de outras pessoas também é Resgatar a tradição caipira. Meu sonho é me formar e dar orgulho aos meus pais com a graça de Deus.",
      ig: "paula_martiins_",
      idade: "",
      cidade: "",
      img: PaulaBeatriz,
    },
    {
      nome: "Eloisa Rabelo de Queiroz",
      texto:
        "Sou Eloisa Rabelo de Queiroz, tenho 15 anos, mas completo 16 anos dia 20/12 e candidata a Garota Amog 2022. Nasci em Goiânia-Go, mas sou Iporaense de coração .Sou uma garota simples e comunicativa. Que adora fazer novas amizades e creio no Amor de Deus, gosto de praticar esportes e amo os animais, por este amor e cuidado pretendo ser Médica Veterinária. Desde criança me apaixonei pela raiz sertaneja, pois, sou filha, neta e bisneta de Iporaenses  que me ensinaram esses valores. Sou muladeira, família, amo a música raiz e por isso digo: ' Eu controlo minhas rédeas, mais Deus é quem indica o caminho.'",
      ig: "eloisarabelo_",
      idade: "16",
      cidade: "Goiânia",
      img: EloisaRabelo,
    },

    {
      nome: "Brunna Letícia Oliveira Silva",
      texto:
        "Olá me chamo Brunna Letícia Oliveira Silva tenho 19 anos fui criada com meus avós na fazenda, gosto muito do encontro de muladeiros, Amo os animais , tenho um sonho em fazer medicina veterinária, Tenho tatuado na pele o meu lema seja forte e corajosa .  Estou em busca de realizar um sonho de ser Garota AMOG.",
      ig: "bruh_oliveira16",
      idade: "19",
      cidade: "",
      img: BrunnaLet,
    },
    {
      nome: "Eukyelly Ângelo do Couto Silva ",
      texto:
        "Prazer sou Eukyelly Ângelo do Couto Silva de córrego do ouro Goiás , tenho 17 anos . Sou de personalidade forte , porém amorosa , positiva , humilde e muito temente a Deus , sonho em ser reconhecida sem preconceito , fazendo o que amo de bota e chapéu , vivendo ao lado dos animais minha paixão , objetivo é conquistar o público e com o apóio de cada um ser vencedora do concurso garota AMOG 2022 .",
      ig: "eukyelly_couto",
      idade: "17",
      cidade: "Córrego do Ouro",
      img: Eukelly,
    },
    {
      nome: "Raissa Rosa Rodrigues",
      texto:
        "Sou Raissa Rosa Rodrigues, tenho 16 anos, moro em São João da Paraúna-GO. Sou estudante,muladeira,sou extrovertida,brincalhona,simpática. Amo o mundo country e todas suas tendências. Tenho uma personalidade forte,sou bastante objetiva e sempre corri atrás das minhas conquistas e realizações. Meu maior sonho é me formar no curso de Agronomia,para que eu consiga conquistar todos os meus objetivos,conto com a ajuda de pessoas que vem do mundo sertanejo,de cidade interiorana sempre participei de festas de padroeiro,cavalgadas e tudo relacionado a vida simples de um bom caipira,ou seja nosso jeito goiano de ser. Meu próximo objetivo agora é me tornar a Garota Amog 2022, isso suprirá a minha realização como ser. É tudo isso que eu quero e almejo.",
      ig: "rodrygs_0176",
      idade: "16",
      cidade: "São João da Paraúna",
      img: RaissaRosa,
    },
    {
      nome: "Isadora Leão",
      texto:
        "Oii, meu nome é Isadora ( isadorafleao ), sou de Rio Verde-GO. Sou o tipo de pessoa que adora estar rodeada de família e amigos e que amo fazer parte dessa tradição que está presente em minha família desde sempre. Curso medicina. Sou uma pessoa muito religiosa e faço com muita fé tudo em minha vida, colocando Deus em primeiro lugar. Procuro ser sempre positiva e grata e enfrentar com leveza todas as situações. Sou alguém que adapta fácil as circunstâncias e que levo comigo e admiro como principais características a humildade e o respeito. Isadora Leão, o prazer é todo meu!",
      ig: "isadorafleao",
      idade: "",
      cidade: "Rio Verde",
      img: IsadoraLeao,
    },
    {
      nome: "Kaylane Raine",
      texto:
        "Oiii, me chamo Kaylane Raine, tenho 18 anos, sou baiana mas moro em Iporá Goiás. Meu respeito e amor pela tradição veio de uma família simples e humilde, e um dos meus sonhos é construir minha família para que eu possa repassar para os meus filhos tudo que me foi ensinado. ❤️🙏🏽",
      ig: "kaylane_raine",
      idade: "18",
      cidade: "",
      img: Kaylane,
    },
    {
      nome: "Maria Eduarda Ferreira",
      texto:
        "Oii ! Meu nome é Maria Eduarda tenho 18 anos e sou apaixonada pelo mundo , pelas  tradições e por animais. Sou uma pessoa cheia de metas , sou  positiva, verdadeira e persistente . Uma das minhas metas pra agora é estar entre as 13 finalistas desse concurso, entrego nas mãos de Deus esse momento que ele abençoe e que cuide de tudo como deve ser , peço vocês também que me ajude curtinho essa foto  ❤",
      ig: "dudaferreira6760",
      idade: "18",
      cidade: "",
      img: MariaEduarda,
    },

    {
      nome: "Tâmara Lopes",
      texto:
        "Olá meu nome é  Tâmara Lopes Sou uma pessoa muito integra, tenho valores sólidos e vivo de acordo com eles. Encaro o que vem pela frente com positividade e humildade no coração. Confiar em si mesmo e o primeiro passo necessário para a vitória",
      ig: "ttamaraalves",
      idade: "",
      cidade: "",
      img: TamaraLopes,
    },
    {
      nome: "Maressa Farias de Abreu",
      texto:
        "Olá meus amigos, me chamo Maressa Farias de Abreu, e sou uma das candidatas a garota AMOG. Tenho 19 anos, nasci em Montes Claros de Goiás e aos 14 anos me mudei para Iporá para estudar e me tornei iporaense de coração, pois sou encantada com o carinho e a hospitalidade dessa cidade. Carrego comigo uma paixão imensa pelos animais e pela música sertaneja, procuro sempre preservar as boas amizades e fazer novos amigos, sou muito decidida e dedicada e por isso sempre busco alcançar meus objetivos e sonhos em todos os aspectos da minha vida. Um dos meus maiores sonhos no momento é me tornar a Garota AMOG, espero que Deus me guie nesse caminho para que eu possa representar essa tradição que encanta e emociona a cada um de nós.       E claro, conto com o apoio e a torcida de cada um de vocês!",
      ig: "farias_maressa",
      idade: "19",
      cidade: "Montes Claros de Goiás",
      img: MaressaFarias,
    },

    {
      nome: "Izadora Vidal",
      texto:
        "Me chamo Izadora Vidal tenho 19 anos, faço medicina veterinária, sou competidora de prova de marcha, e atual princesa country Goiás, venho de família mineira e foi onde aprendi os costumes e valores mais lindos e peguei gosto pela vida sertaneja, e a algum tempo tenho sido mais inserida na tradição muladeira por influência de amigos e alguns parentes que tem despertado em mim uma admiração enorme e uma vontade de fazer parte de tudo isso! Já a alguns anos tenho sonho de prestigiar essas festas grandes como ipora, barretos, jaguariúna.. mas sempre foi tudo muito inacessível pra mim, esse ano se Deus quiser e tudo der certo vou poder prestigiar de perto oque já admirava de longe e quem sabe mostrar mais quem sou e representar essa festa linda ",
      ig: "izadoravidall",
      idade: "19",
      cidade: "",
      img: IzadoraVidal,
    },
    {
      nome: "Elisa Arbues",
      texto:
        "Ola eu sou Elisa arbues , sou de Montes Claros de Goiás , médica veterinária. Muitos me considera como guerreira , sou apensar uma mulher sonhadora e batalhadora, prestativa , humilde ! Corro atrás dos meus objetivos, personalidade forte , não fico sentada esperando o futuro aontecer … Sonhos ? Aaaah o sonhos !!!Que muladeira não sinhá em ser garota Amog , representar e respeitar essa cultura tão linda que é o muladeiros !",
      ig: "elisaarbues",
      idade: "",
      cidade: "Montes Claros de Goiás",
      img: ElisaArbues,
    },
    {
      nome: "Kauanny Araújo",
      texto:
        "Me chamo Kauanny Araújo, tenho 18 anos e sou da cidade de Iporá-GO. Sempre cresci nesse meio, que foi ensinado de geração à geração na minha família,  em  gostar de muares. Sem contar da minha relação com esses animais que, me ajudaram a vencer uma depressão a alguns anos atrás. Com muita força e determinação conto com a sua ajuda para que possamos estar representando a tradição desse meio em que vivemos, da melhor forma possível. ",
      ig: "kauanny_araujo",
      idade: "18",
      cidade: "Iporá",
      img: KauannyAraujo,
    },
    {
      nome: "Júllia Lays",
      texto:
        "Sou Júllia Lays, tenho 23 anos e sou candidata à Garota Amog 2022! Moro em Goianésia - Go. Risonha com interesse comum para grandes amizades, observadora e muito sistemática. Valorizo a humildade ela é  alicerce da sabedoria. Nascida e criada em berço sertanejo, amo e respeito a nossa cultura goiana. Cresci com histórias maravilhosas do meu avô muladeiro, sempre presente em cavalgadas culturais da minha cidade e região. Sonho em me tornar à Garota Amog 2022 e conto com a sua ajuda de todos vocês.",
      ig: "jullia_lays",
      idade: "",
      cidade: "",
      img: JuliaLays,
    },

    {
      nome: "Lara Fábia morais ",
      texto:
        "alegre, sincera, forte,corajosa,estrovertida , A chave da felicidade e sonhar , a chave do sucesso e tornar os sonhos realidade, ganhando ou não eu realizei um sonho , nunca e tarde para um novo sonho um novo objetivo e uma votante de fazer tudo mudar.                  ",
      ig: "Lara_morais54",
      idade: "",
      cidade: "",
      img: LaraFabia,
    },
    {
      nome: "Bruna Eduarda",
      texto:
        "Meu nome é Bruna Eduarda, tenho 20 anos, sou da cidade Rio Verde-GO. É uma honra participar da garota AMOG 2022, um concurso que carrega consigo uma história incrível e muita tradição. Agradeço a Deus pela oportunidade e darei o meu melhor nesse evento tão especial. Peço ajuda de vocês para conseguir realizar esse sonho, vamos votar galera ",
      ig: "brunaeduardalemes",
      idade: "20",
      cidade: "Rio Verde",
      img: BrunaEduarda,
    },
    {
      nome: "Talita Alves Pereira",
      texto:
        "Eu fui criada na cultura sertaneja e sou apaixonada pelos muares, desde pequena um dos meus sonhos é um dia estar bem preparada para participar das provas de rédea. Eu sou uma pessoa bem humorada e sou apaixonada pela festa de muladeiros de Iporá.",
      ig: "Talita_jamel",
      idade: "18",
      cidade: "",
      img: TalistaAlves,
    },
    {
      nome: "Welida",
      texto:
        "🤠 Não existe Sonho impossível para um Coração cheio de Fé. Quando o nosso Coração faz Planos, o melhor é apresentá-los a Deus e descansar na certeza de que Ele sim tem o poder de transformar sonhos em Realidade... Não diminua os teus Sonhos, aumenta a sua Fé.🍃👩🏻‍🌾🙏🏻",
      ig: "Welida_viana",
      idade: "",
      cidade: "",
      img: Welida,
    },
    {
      nome: "Juliana Ribeiro",
      texto:
        "Sou Juliana Ribeiro, tenho 18 anos. Sou uma pessoa carismática, alegre, que gosta de estar junto com o povo, determinada, cheia de sonhos para realizar! Sempre morei na fazenda, consequentemente tenho esse meio rural dentro de mim, que eu gosto tanto! E espero poder representar essa tradição tão linda que temos, o nosso (V)uladeiros!",
      ig: "julianaribeiro_18",
      idade: "18",
      cidade: "",
      img: JulianaRibeiro,
    },
    {
      nome: "Maria Eduarda Morais",
      texto:
        "Ooi! Me chamo Maria Eduarda, nasci em Barra do Garças (MT) e moro em Baliza (GO). O que dizer da minha experiência com animais? Aaaa, libertador! Acredito que isso seja uma terapia, amo o contato com eles... Amo a companhia deles, inclusive amo aprender coisas novas, que não deixa que os dias virem uma rotina, mas sim um dia totalmente diferente do outro. Gosto de fazer novas amizades, gosto de liberdade, me aventurar, e principalmente me arriscar e dar a cada à tapa para aprender novas experiências da vida. Peço encarecidamente seu voto para representar o Encontro Nacional de Muladeiros. E acredito que se não der certo essa vez, tentamos várias e várias vezes, pois diante de Deus e nossa Mãe Aparecida, a única coisa impossível é aquela que você não tenta. Desde já agradeço o apoio e contribuição.",
      ig: "dudinhagoias",
      idade: "",
      cidade: "Baliza",
      img: MariaEdu,
    },
    {
      nome: "Amanda Eulália",
      texto:
        "Sou Amanda Eulália, tenho 17 anos, moro em Acreúna-GO, sou candidato á garota amog 2022. Sou apaixonada por esse meio country, desde pequena meu pai sempre me incentivou a participar e cuidar desse meio. Tenho a personalidade forte, uma pessoa brincalhona, gosto muito de fazer as pessoas rir, amo enaltecer a beleza de outras mulher. Sonho em ser a garota amog. ",
      ig: "amandaeulaliaa",
      idade: "17",
      cidade: "Acreúna",
      img: AmandaEula,
    },
    {
      nome: "Inaria",
      texto:
        "Oii pessoal meu nome é Inaria, sou uma das candidatas garota amog 2022, estou muuuito feliz por estar participando dessa história tão linda, conto com a ajuda de vocês curtindo muuuuito pra me fazer chegar lá!!",
      ig: "",
      idade: "",
      cidade: "",
      img: Inaria,
    },
    {
      nome: "Carmem Julia",
      texto:
        "Modelo, Miss Iporá 2021, Candidata a Miss Goiás 2021, mãe, atleta. Que eu possa ser referência de Beleza, Simpatia e Humildade. Levando um pouco da tradição MULADEIROS pra as próximas gerações",
      ig: "carmemodel",
      idade: "27",
      cidade: "Iporá",
      img: carmemodel,
    },
    {
      nome: "Beatryz Santos Rocha",
      texto:
        "Olá sou Beatryz Santos Rocha. 18 anos Do Iporázão vey falado Com amor e saúde da vida eu não reclamo ,amo a vida que levo e levo a vida que amo. Conto com sua curtida para ficar entre as 13 finalistas,que Deus te recompense,thauu obrigadaa .",
      ig: "beatryzsantos___",
      idade: "18",
      cidade: "Iporá",
      img: beatryzsantos,
    },

    {
      nome: "Ana Caroline",
      texto:
        "Sou a Ana Caroline . Mais conhecida por Carol Pires… Quem é Carol Pires ?  Ela expressa um olhar de menina mulher sonhadora , mais com um propósito, ser feliz e tornar as pessoas próximas satisfeitas por me conhecer melhor e ver o quanto meu coração é bom , generoso e único .  Sou uma mulher sem medo de errar e muito menos de arriscar , vivo cada segundo da minha vida  com muita intensidade, procurando aprender com os erros e ser um pouquinho melhor a cada dia .  Sempre em busca da realização de todos os meus sonhos e objetivos.  Sempre fui muito apaixonada em modelar e ficar na frente das câmeras e amante das passarelas . E com muita determinação, dedicação , otimismo e fé , atraímos as melhores coisas da vida , chegamos onde queremos , e a vontade de Deus é perfeita .",
      ig: "carolpires_20",
      idade: "",
      cidade: "",
      img: carolpires_20,
    },
    {
      nome: "Lara Fábia de Souza",
      texto:
        "Olá me chamo Lara Fábia de Souza , sou de Rio Verde Goiás , sempre gostei de conquistar minhas coisas , sou parceira , alegre , me importo muito com as pessoas e sempre carrego a humildade e o respeito comigo. Tenho vários sonhos , mais um deles sempre foi participar de um concurso com uma tradição tão linda e que amo e ser reconhecida e lembrada pela a alegria contagiante , humildade e o carisma. ",
      ig: "Larasouza.ll",
      idade: "",
      cidade: "Rio Verde",
      img: Larasouza,
    },

    {
      nome: "Maria Eduarda Santos",
      texto:
        "Prazer me chamo: Maria Eduarda Santos(Duda)🧑🏼‍🌾 🥰Tenho 15 anos☑️City Trindade(Go)☑️✨Orgulho de ser Made in de roça desde pequena☑️😍Amo a vida simples da roça☑️❤️Prezo muito a humildade e a simpatia☑️😉Curto equinos🐴🌵❌Futura Med Veterinária👩🏼‍⚕️🤞🏽Amor pela agropecuária ☑️🌾🐂💯Vivendo e aprendendo sempre☑️🧑🏼‍🌾💱🤞🏽🆑",
      ig: "dudaah_santos062",
      idade: "15",
      cidade: "Trindade",
      img: dudaah_santos062,
    },
    {
      nome: "Larissa Silva Casseb",
      texto:
        "meu nome é Larissa, tenho 19 anos,sou de Iporá-GO,meu objetivo é poder participar da garota amog 2022,sonhos serão poder realizar cada coisa que eu faço,participo do mulandeiro à muitos anos as nunca me candidatei para garota amog primeira vez então ganhando ou não será uma conquista maravilhosa.",
      ig: "casseblarissa",
      idade: "19",
      cidade: "Iporá",
      img: casseblarissa,
    },
  ];
  // const [garotaState, setGarotaState] = useState(Array());

  const history = useHistory();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await listGarota();
  //     res && setGarotaState(res.map((doc) => doc));
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Styled.MainContainer>
        <Styled.Icons
          onClick={() => {
            history.push("/");
          }}
          src={garota}
        />
      </Styled.MainContainer>
      <Styled.CardContainer>
        <Styled.Title>Atenção, voto único!</Styled.Title>
        {info.map((item, key) => (
          <>
            <Styled.Card>
              <Styled.CardMainTitle>
                <Styled.CardMainTitleSpan>{item.nome}</Styled.CardMainTitleSpan>
                <Styled.CardIcon src={hat} alt="" />
              </Styled.CardMainTitle>
              <Styled.CarAux>
                <Styled.CardImg src={item.img}></Styled.CardImg>
                <Styled.CardData>
                  <Styled.CardTitleContentAux>
                    <Styled.CardTitleAux>Sobre:</Styled.CardTitleAux>
                    <Styled.CardAbout>{item.texto}</Styled.CardAbout>
                  </Styled.CardTitleContentAux>
                  <Styled.CardTitleContent>
                    {item.idade && (
                      <>
                        <Styled.CardTitle>Idade: {item.idade}</Styled.CardTitle>
                      </>
                    )}
                  </Styled.CardTitleContent>
                  <Styled.CardTitleContent>
                    {item.cidade && (
                      <>
                        <Styled.CardTitle>
                          Cidade: {item.cidade}
                        </Styled.CardTitle>
                      </>
                    )}
                  </Styled.CardTitleContent>
                  {item.ig && (
                    <Styled.CardTitle
                      style={{ cursor: "pointer", width: "fitContent" }}
                      onClick={() => {
                        window.location.href = `https://www.instagram.com/${item.ig}/?hl=pt-br`;
                      }}
                    >
                      Instagram: @{item.ig}
                    </Styled.CardTitle>
                  )}
                  {/* <Styled.BtnContainer
                    onClick={() => {
                      Vote(key);
                    }}
                  >
                    <Styled.CardBtn> Vote </Styled.CardBtn>
                  </Styled.BtnContainer> */}
                </Styled.CardData>
              </Styled.CarAux>
            </Styled.Card>
          </>
        ))}
      </Styled.CardContainer>
      <Footer />
    </>
  );
};

export default Garota;
