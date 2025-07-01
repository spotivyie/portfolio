import clickzone from '../projects/clickzone.jpeg'
import expense from '../projects/expense.jpeg'
import eplay from '../projects/eplay.jpeg'
import essenze from '../projects/essenze.jpeg'
import sipdrop from '../projects/sipdrop.jpeg'
import notas from '../projects/notas.jpeg'
import efood from '../projects/efood.jpeg'
import disney from '../projects/disney.jpeg'

export const HERO_CONTENT = `Desenvolvedor Full Stack com foco em aplicações web modernas, atuando no desenvolvimento de interfaces interativas e responsivas com React, TypeScript e JavaScript, além da construção de APIs e soluções back-end com Node.js e Java.`

export const ABOUT_TEXT = `Sou desenvolvedora Full Stack com mais de 2 anos de experiência em desenvolvimento web, atuando principalmente com React, JavaScript, TypeScript e Node.js. Tenho formação complementar pela EBAC e Rocketseat, e atualmente curso Ciência da Computação. Gosto de criar soluções que combinam design funcional com código limpo. Tenho uma mentalidade colaborativa, facilidade em aprender, resiliência e paixão por inovação. Neste portfólio, você encontrará projetos que refletem meu crescimento técnico e minha dedicação ao desenvolvimento de software moderno.`

export const EXPERIENCES = [
    {
        year: "2309 - present",
        role: "junior",
        company: "company",
        description: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        technologies: ["react", "tailwind", "java"]
    },
    {
        year: "2309 - present",
        role: "junior",
        company: "company",
        description: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        technologies: ["react", "tailwind", "java"]
    }
]

export const PROJECTS = [
    {
        title: "ClickZone",
        image: clickzone,
        description: "ClickZone é uma plataforma moderna de e-commerce especializada em periféricos para computadores, oferecendo uma variedade de produtos como teclados, mouses, headsets e acessórios gamer. Construído com tecnologias como React, Vite, TailwindCSS e integrado com Stripe para pagamentos seguros, o sistema conta com backend em Node.js, Express e MongoDB para garantir performance e escalabilidade. O objetivo é entregar qualidade e praticidade para quem busca equipamentos de alta performance.",
        technologies: ["React", "Vite", "TailwindCSS", "Stripe", "Node.js", "Express.js", "MongoDB", "JWT"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/clickzone_frontend" },
            { type: "Backend", url: "https://github.com/spotivyie/clickzone_backend" }
        ],
        link: "https://clickzone-frontend.vercel.app",
        video: "",
        summary: "ClickZone é uma loja online de acessórios gamer com foco em desempenho e tecnologia moderna.",
    },
    {
        title: "Essenze",
        image: essenze,
        description: "Essenze é um frontend moderno em React e TypeScript, usando Vite para build rápido. Usa Redux Toolkit para estado, React Hook Form e Zod para formulários, e Styled Components para estilização. Inclui Phosphor Icons, Immer para estado imutável, e ESLint com TypeScript para qualidade do código.",
        technologies: ["React", "TypeScript", "Vite", "Styled Components", "React Hook Form", "Zod"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/essenze" }
        ],
        link: "https://essenze.vercel.app",
        video: "https://streamable.com/n4jwun",
        summary: "Essenze é uma loja online moderna de perfumes, com interface elegante e fácil de usar.",
    },
    {
        title: "SipDrop",
        image: sipdrop,
        description: "SipDrop é uma plataforma moderna voltada para a venda de bebidas. Desenvolvida com Next.js, TypeScript e integração com Stripe, ela oferece uma experiência fluida, responsiva e segura tanto para clientes quanto para administradores.",
        technologies: ["Next.js","TypeScript","Tailwind CSS","MongoDB","NextAuth","Stripe","React Hook Form"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/sipdrop" }
        ],
        link: "https://sipdrop.vercel.app",
        video: "https://streamable.com/6erln9",
        summary: "SipDrop é uma loja online de bebidas que oferece praticidade e segurança na sua compra."

    },
    {
        title: "Expense",
        image: expense,
        description: "Expense é uma aplicação moderna para controle financeiro pessoal, que facilita o gerenciamento de despesas e rendas. O frontend, construído com React, Vite e TailwindCSS, oferece uma interface intuitiva e responsiva, com gráficos de dados usando Recharts e notificações com react-hot-toast. O backend utiliza Node.js, Express e MongoDB com Mongoose para persistência de dados, além de recursos como autenticação segura via JWT, upload de arquivos com Multer e segurança de senhas com bcryptjs.",
        technologies: ["React", "TailwindCSS", "Recharts", "Node.js", "MongoDB", "Vite", "Express.js" ],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/expense_frontend" },
            { type: "Backend", url: "https://github.com/spotivyie/expense_backend" }
        ],
        link: "https://expense-frontend-sooty.vercel.app",
        video: "https://streamable.com/g3v838",
        summary: "Expense é um app de controle financeiro pessoal com foco em organização, segurança e tecnologia.",
    },
    {
        title: "EPLAY",
        image: eplay,
        description: "EPlay é uma aplicação web moderna feita com React e TypeScript, usando Redux Toolkit para gerenciamento de estado e React Router para navegação. Conta com Styled-Components para estilização, Formik e Yup para formulários e validação, além de React Spinners para feedback visual. Testes com Testing Library e ferramentas como ESLint e Prettier garantem qualidade e organização do código.",
        technologies: ["React ", "TypeScript", "Styled-Components", "React Router", "Formik + Yup"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/eplay" }
        ],
        link: "https://games-ten-gamma.vercel.app",
        video: "",
        summary: "EPlay é uma plataforma moderna para comprar jogos, que oferece uma experiência rápida e intuitiva.",
    },
    {
        title: "Notas",
        image: notas,
        description: "NLW Expert Notes é uma app moderna para anotações com React, TypeScript e Vite, que usa TailwindCSS para o visual e Radix UI para componentes acessíveis. Conta com ícones Lucide, notificações Sonner e permite gravar mensagens por áudio via microfone, tornando a experiência mais prática e interativa.",
        technologies: ["React ", "TypeScript", "Vite", "TailwindCSS", "Radix UI"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/notas" }
        ],
        link: "https://notas-virid.vercel.app",
        video: "",
        summary: "Notes é um aplicativo prático para anotações, que permite registrar textos e gravações de áudio.",
    },
    {
        title: "efood",
        image: efood,
        description: "Foods é uma aplicação front-end para gerenciamento de pedidos e entregas, desenvolvida com React, TypeScript e Styled-Components para uma interface estilizada e responsiva. Utiliza Redux Toolkit para gerenciamento de estado, React Router para navegação, Formik e Yup para validação de formulários, além de bibliotecas como React Spinners para feedback visual e React Input Mask para entradas formatadas. O projeto também conta com ferramentas de teste, linting e otimização de código para garantir qualidade e manutenção facilitada.",
        technologies: ["React", "TypeScript", "Styled-Components", "React Router DOM"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/foods" }
        ],
        link: "https://foods-dusky.vercel.app",
        video: "",
        summary: "efood é uma plataforma para comprar comidas online, focada em pedidos e entregas rápidas.",
    },
    {
        title: "Disney",
        image: disney,
        description: "Disney Clone é um projeto que replica o site da Disney focado na otimização e build de front-end utilizando Gulp para automatizar tarefas como compilação de Sass, minificação de scripts e otimização de imagens. A estrutura prioriza workflows eficientes para desenvolvimento rápido e deploy simplificado.",
        technologies: ["Gulp", "Sass", "Uglify-js"],
        github: [
            { type: "Frontend", url: "https://github.com/spotivyie/Clone_disneyplus" }
        ],
        link: "https://clone-disneyplus-orpin-nine.vercel.app",
        video: "",
        summary: "Disney é um clone do site oficial, focado em otimização de front-end.",
    },
]


export const CONTACT = 
    {
        adress: "Primavera do Leste - MT",
        phone: "(66) 999043964",
        email: "eduardac.brandao@hotmail.com",
    }
