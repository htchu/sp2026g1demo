export type Lang = 'en' | 'zh';

export const content = {
  en: {
    meta: {
      title: 'AI Agent Learning Platform | ICFI 2026',
      description:
        'Building an Agent-Based Programming Learning Platform: Syntax Disambiguation and Error Correction for EFL Students',
    },
    nav: {
      home: 'Home',
      intro: 'Introduction',
      literature: 'Literature Review',
      methodology: 'Methodology',
      results: 'Results',
      references: 'References',
    },
    hero: {
      conference: 'ICFI 2026 — International Conference on Future Intelligence',
      title:
        'Building an Agent-Based Programming Learning Platform',
      subtitle:
        'Syntax Disambiguation and Error Correction for EFL Students',
      cta: 'Read the Research',
    },
    intro: {
      heading: 'Introduction',
      body: [
        'In the contemporary digital era, computational thinking and programming skills have become essential competencies for high school students worldwide. However, for learners in an English as a Foreign Language (EFL) context, the initial stages of acquiring programming proficiency present unique cognitive hurdles.',
        'A primary obstacle lies in the linguistic barrier associated with text-based programming languages, which rely heavily on English vocabulary. For novice high school learners, distinguishing between system-defined keywords—such as "for," "while," or "def"—and user-defined identifiers, like variable names, is profoundly challenging.',
        'Because these students often possess limited English comprehension, they tend to perceive the codebase as a homogenous, overwhelming string of unfamiliar words, which severely exacerbates their cognitive load. Instead of focusing on computational logic and problem-solving strategies, students expend excessive mental effort trying to decipher the structural components of the language itself.',
        'This high cognitive barrier leads to profound frustration, diminished self-efficacy, and a restricted capacity to comprehend and write functional code, frequently causing promising students to abandon their computer science education prematurely.',
        'Despite the rapid proliferation of programming education tools, most existing platforms fail to address this linguistic bottleneck. Traditional compilers generate rigid, technical, and exclusively English error messages that are virtually indecipherable to EFL beginners.',
        'Furthermore, while advanced generative AI and Large Language Models have revolutionized code generation, their direct application in novice education remains problematic. Generic AI tools often act as automated problem solvers, directly supplying the corrected code without breaking down the syntax or explaining the underlying semantic roles.',
        'To bridge this critical pedagogical gap, this study proposes the development of an innovative, agent-based programming learning platform tailored specifically for high school students—utilizing a multi-agent system architecture that integrates precise syntax parsing with semantic reasoning capabilities of advanced AI models.',
      ],
    },
    literature: {
      heading: 'Literature Review',
      sections: [
        {
          number: '2.1',
          title: 'Programming Learning for EFL Students',
          body: 'This section establishes the foundational problem—integrating Sweller\'s Cognitive Load Theory to explain how the inability to distinguish between system keywords and user-defined variables leads to frustration and high dropout rates among non-native English speakers learning to program.',
          refs: ['Guo (2018)', 'Parham-Mocello et al. (2022)'],
        },
        {
          number: '2.2',
          title: 'Limitations of Traditional IDEs and Generic AI Tools',
          body: 'This section critiques current solutions, explaining why standard IDEs (with their cryptic English errors) and generic Large Language Models—which act as a "black box" by just giving the answer without explaining the syntax—fail to provide the necessary pedagogical scaffolding for EFL beginners.',
          refs: ['Prather et al. (2023)', 'Israel et al. (2023)'],
        },
        {
          number: '2.3',
          title: 'AI Agent for Program Evaluation and Pedagogical Scaffolding',
          body: 'This section presents the solution. It introduces Agentic AI and Intelligent Tutoring Systems (ITS), drawing on Vygotsky\'s Zone of Proximal Development. It explains how multi-agent systems can parse code, evaluate errors, and provide localized, step-by-step syntax disambiguation to reduce cognitive load.',
          refs: ['Hermans (2020)'],
        },
      ],
    },
    methodology: {
      heading: 'Methodology',
      sections: [
        {
          number: '3.1',
          title: 'Research Design and Participants',
          body: 'This study employs a quasi-experimental pre-test and post-test design to evaluate the effectiveness of the proposed agent-based programming platform. The study area is situated in central Taiwan, providing a representative EFL context. The sample comprises approximately 100 first-year high school students enrolled in an introductory Python programming elective course.',
          highlight: 'n = 100 students | 8-week study | Central Taiwan',
          groups: [
            { label: 'Experimental Group', value: 'n = 50', desc: 'Agent-based syntax disambiguation platform' },
            { label: 'Control Group', value: 'n = 50', desc: 'Standard IDE (Python IDLE or VS Code)' },
          ],
        },
        {
          number: '3.2',
          title: 'Instruments and Data Collection Procedures',
          body: 'Data will be collected through three primary instruments to comprehensively assess the learning process.',
          instruments: [
            { icon: '📝', name: 'Programming Achievement Tests', desc: 'Pre-test & post-test measuring code comprehension, error identification, and basic scripting ability.' },
            { icon: '🧠', name: 'NASA Task Load Index (NASA-TLX)', desc: 'Questionnaire deployed after major coding assignments to quantify perceived cognitive load—mental demand and frustration.' },
            { icon: '📊', name: 'System Log Data', desc: 'Continuous background recording tracking AI agent interactions, compilation error frequency, and average debugging time.' },
          ],
        },
        {
          number: '3.3',
          title: 'Analytical Methods',
          body: 'Quantitative data will be analyzed using statistical software (SPSS).',
          methods: [
            { name: 'ANCOVA', desc: 'Analysis of Covariance on post-test scores with pre-test as covariate—controls for prior programming knowledge.' },
            { name: 'Independent t-tests', desc: 'Compare NASA-TLX cognitive load scores and log-derived debugging times between experimental and control groups.' },
          ],
        },
        {
          number: '3.4',
          title: 'System Demonstration and Results Showcase',
          body: 'The platform\'s effectiveness is demonstrated using the first two CPE (Collegiate Programming Examination) 1-Star problems. The system provides a two-stage scaffolding approach.',
          stages: [
            { step: '1', label: 'Explanation Agent', desc: 'Translates the problem semantics into native-language logic, making problem descriptions accessible to EFL learners.' },
            { step: '2', label: 'Syntax Disambiguation', desc: 'Deconstructs the code\'s Abstract Syntax Tree (AST) to explicitly explain which terms are mandatory system keywords and which are customizable variables.' },
          ],
        },
      ],
    },
    platform: {
      heading: 'Platform Architecture',
      description: 'A multi-agent system designed to reduce cognitive load for EFL programming learners.',
      features: [
        { icon: '🔍', title: 'Syntax Parser Agent', desc: 'Automatically ingests student-written code and precisely disaggregates the syntax, visually distinguishing rigid system keywords from flexible user-defined variables.' },
        { icon: '🌐', title: 'Localization Agent', desc: 'Provides plain-language explanations in the student\'s native language, elucidating the strict grammatical function of keywords and the contextual purpose of student-named variables.' },
        { icon: '🛠️', title: 'Diagnostic Agent', desc: 'Translates obtuse compiler errors into intuitive feedback that guides learners toward self-correction rather than providing direct answers.' },
        { icon: '📈', title: 'Progress Tracker', desc: 'Continuously monitors interaction patterns to adapt scaffolding support based on individual student proficiency and error frequency.' },
      ],
    },
    references: {
      heading: 'References',
      items: [
        {
          apa: 'Guo, P. J. (2018). Non-native English speakers learning computer programming: Barriers, desires, and design opportunities. Conference on Human Factors in Computing Systems - Proceedings, 2018-April.',
          doi: 'https://doi.org/10.1145/3173574.3173970',
        },
        {
          apa: 'Hermans, F. (2020). Hedy: A Gradual Language for Programming Education. ICER 2020 - Proceedings of the 2020 ACM Conference on International Computing Education Research.',
          doi: 'https://doi.org/10.1145/3372782.3406262',
        },
        {
          apa: 'Israel, M., Li, J., Yan, W., Elagha, N. A., Huggins-Manley, C. A., Luo, F., & Franklin, D. (2023). How are Elementary Students Demonstrating Understanding of Decomposition within Elementary Mathematics? ICER 2023.',
          doi: 'https://doi.org/10.1145/3568813.3600143',
        },
        {
          apa: 'Parham-Mocello, J., Erwig, M., Niess, M., Nelson, A., Weber, J., & Berliner, G. (2022). Using a Functional Board Game Language to Teach Middle School Programming. Proceedings - Frontiers in Education Conference, FIE, 2022-October.',
          doi: 'https://doi.org/10.1109/FIE56618.2022.9962569',
        },
        {
          apa: 'Prather, J., Reeves, B. N., Denny, P., Becker, B. A., Leinonen, J., Luxton-Reilly, A., Powell, G., Finnie-Ansley, J., & Santos, E. A. (2023). "It\'s Weird That it Knows What I Want": Usability and Interactions with Copilot for Novice Programmers. ACM Transactions on Computer-Human Interaction, 31(1).',
          doi: 'https://doi.org/10.1145/3617367',
        },
      ],
    },
    footer: {
      text: 'Presented at ICFI 2026 · Built with Next.js',
    },
  },
  zh: {
    meta: {
      title: 'AI 代理學習平台 | ICFI 2026',
      description:
        '建置基於代理人的程式設計學習平台：針對英語為外語學生的語法消歧與錯誤修正',
    },
    nav: {
      home: '首頁',
      intro: '研究介紹',
      literature: '文獻回顧',
      methodology: '研究方法',
      results: '研究成果',
      references: '參考文獻',
    },
    hero: {
      conference: 'ICFI 2026 — 未來智慧國際研討會',
      title: '建置基於代理人的程式設計學習平台',
      subtitle: '針對英語為外語（EFL）學生的語法消歧與錯誤修正',
      cta: '閱讀研究',
    },
    intro: {
      heading: '研究介紹',
      body: [
        '在當今數位時代，運算思維與程式設計技能已成為全球高中生的核心素養。然而，對於英語為外語（EFL）環境的學習者而言，學習程式設計的初始階段面臨獨特的認知挑戰。',
        '主要障礙在於文字型程式語言的語言藩籬——這些語言大量依賴英文詞彙。對於初學的高中生而言，區分系統定義關鍵字（如 "for"、"while"、"def"）與使用者自定義識別字（如變數名稱）是極大的挑戰。',
        '由於這些學生的英語理解能力有限，他們往往將程式碼視為一串令人不知所措的陌生英文單字，嚴重加重了認知負荷。學生無法專注於運算邏輯與解題策略，而是耗費大量心力試圖解析語言本身的結構元素。',
        '這種高認知門檻導致深度的挫折感、自我效能感下降，以及理解和撰寫程式的能力受限，常使有潛力的學生提早放棄資訊科學教育。',
        '儘管程式設計教育工具大量湧現，大多數現有平台仍無法解決這一語言瓶頸。傳統編譯器產生的錯誤訊息僵化、技術性強且全為英文，對 EFL 初學者幾乎無法理解。',
        '此外，儘管生成式 AI 和大型語言模型徹底改變了程式碼生成，其在初學者教育中的直接應用仍存在問題。通用 AI 工具往往扮演自動解題者的角色，直接提供修正後的程式碼，而不說明語法或解釋各元件的語意角色。',
        '為彌補這一關鍵的教學缺口，本研究提出開發一個創新的、基於代理人架構的程式設計學習平台，專為高中生量身設計——運用多代理人系統架構，整合精確的語法解析與先進 AI 模型的語意推理能力。',
      ],
    },
    literature: {
      heading: '文獻回顧',
      sections: [
        {
          number: '2.1',
          title: 'EFL 學生的程式設計學習',
          body: '本節建立基礎問題背景——整合 Sweller 的認知負荷理論，解釋無法區分系統關鍵字與使用者自定義變數如何導致非英語母語者在學習程式設計時產生挫折感和高退出率。',
          refs: ['Guo (2018)', 'Parham-Mocello et al. (2022)'],
        },
        {
          number: '2.2',
          title: '傳統 IDE 與通用 AI 工具的局限性',
          body: '本節批判現有解決方案，解釋為何標準 IDE（其晦澀的英文錯誤訊息）和通用大型語言模型——以「黑箱」方式直接給出答案而不解釋語法——無法為 EFL 初學者提供必要的教學鷹架。',
          refs: ['Prather et al. (2023)', 'Israel et al. (2023)'],
        },
        {
          number: '2.3',
          title: 'AI 代理人用於程式評估與教學鷹架',
          body: '本節提出解決方案。引入代理人式 AI 和智慧型輔導系統（ITS），借鑑 Vygotsky 的近側發展區（ZPD）理論，解釋多代理人系統如何解析程式碼、評估錯誤，並提供在地化、逐步的語法消歧以降低認知負荷。',
          refs: ['Hermans (2020)'],
        },
      ],
    },
    methodology: {
      heading: '研究方法',
      sections: [
        {
          number: '3.1',
          title: '研究設計與研究對象',
          body: '本研究採用準實驗前後測設計，以評估所提出的代理人程式設計平台的效果。研究地點位於台灣中部，提供具代表性的 EFL 情境。樣本包含約 100 名修習 Python 程式設計選修課的高中一年級學生。',
          highlight: 'n = 100 名學生 | 8 週研究 | 台灣中部',
          groups: [
            { label: '實驗組', value: 'n = 50', desc: '使用代理人語法消歧平台' },
            { label: '對照組', value: 'n = 50', desc: '使用標準 IDE（Python IDLE 或 VS Code）' },
          ],
        },
        {
          number: '3.2',
          title: '研究工具與資料收集程序',
          body: '將透過三種主要工具全面評估學習歷程。',
          instruments: [
            { icon: '📝', name: '程式設計成就測驗', desc: '前測與後測，測量程式碼理解、錯誤識別及基本腳本撰寫能力。' },
            { icon: '🧠', name: 'NASA 任務負荷指數（NASA-TLX）', desc: '在重大編程作業後施測，量化學生的感知認知負荷——心理需求與挫折程度。' },
            { icon: '📊', name: '系統日誌資料', desc: '持續背景記錄，追蹤 AI 代理人互動情況、編譯錯誤頻率及平均除錯時間。' },
          ],
        },
        {
          number: '3.3',
          title: '分析方法',
          body: '量化資料將使用統計軟體（SPSS）進行分析。',
          methods: [
            { name: '共變數分析（ANCOVA）', desc: '以前測為共變量，對後測分數進行共變數分析——控制學生的先備程式設計知識差異。' },
            { name: '獨立樣本 t 檢定', desc: '比較實驗組與對照組之間的 NASA-TLX 認知負荷分數及日誌衍生的除錯時間。' },
          ],
        },
        {
          number: '3.4',
          title: '系統示範與成果展示',
          body: '使用全國大學程式設計先修檢測（CPE）1 星難度的前兩題，展示平台效果。系統提供兩階段的鷹架學習方式。',
          stages: [
            { step: '1', label: '解釋代理人', desc: '將題目語意翻譯成母語邏輯，使 EFL 學習者能理解全英文的題目描述。' },
            { step: '2', label: '語法消歧', desc: '解構程式碼的抽象語法樹（AST），明確解釋哪些術語是必要的系統關鍵字，哪些是可自定義的變數。' },
          ],
        },
      ],
    },
    platform: {
      heading: '平台架構',
      description: '多代理人系統設計，旨在降低 EFL 程式設計學習者的認知負荷。',
      features: [
        { icon: '🔍', title: '語法解析代理人', desc: '自動讀取學生撰寫的程式碼，精確分解語法，視覺化地區分剛性系統關鍵字與彈性使用者自定義變數。' },
        { icon: '🌐', title: '在地化代理人', desc: '以學生的母語提供平易近人的解釋，闡明關鍵字的嚴格語法功能及學生自訂變數的情境用途。' },
        { icon: '🛠️', title: '診斷代理人', desc: '將晦澀的編譯器錯誤轉化為直觀的回饋，引導學習者自行修正，而非直接提供答案。' },
        { icon: '📈', title: '進度追蹤器', desc: '持續監控互動模式，根據個別學生的熟練度和錯誤頻率，自適應調整鷹架支援力度。' },
      ],
    },
    references: {
      heading: '參考文獻',
      items: [
        {
          apa: 'Guo, P. J. (2018). Non-native English speakers learning computer programming: Barriers, desires, and design opportunities. Conference on Human Factors in Computing Systems - Proceedings, 2018-April.',
          doi: 'https://doi.org/10.1145/3173574.3173970',
        },
        {
          apa: 'Hermans, F. (2020). Hedy: A Gradual Language for Programming Education. ICER 2020 - Proceedings of the 2020 ACM Conference on International Computing Education Research.',
          doi: 'https://doi.org/10.1145/3372782.3406262',
        },
        {
          apa: 'Israel, M., Li, J., Yan, W., Elagha, N. A., Huggins-Manley, C. A., Luo, F., & Franklin, D. (2023). How are Elementary Students Demonstrating Understanding of Decomposition within Elementary Mathematics? ICER 2023.',
          doi: 'https://doi.org/10.1145/3568813.3600143',
        },
        {
          apa: 'Parham-Mocello, J., Erwig, M., Niess, M., Nelson, A., Weber, J., & Berliner, G. (2022). Using a Functional Board Game Language to Teach Middle School Programming. Proceedings - Frontiers in Education Conference, FIE, 2022-October.',
          doi: 'https://doi.org/10.1109/FIE56618.2022.9962569',
        },
        {
          apa: 'Prather, J., Reeves, B. N., Denny, P., Becker, B. A., Leinonen, J., Luxton-Reilly, A., Powell, G., Finnie-Ansley, J., & Santos, E. A. (2023). "It\'s Weird That it Knows What I Want": Usability and Interactions with Copilot for Novice Programmers. ACM Transactions on Computer-Human Interaction, 31(1).',
          doi: 'https://doi.org/10.1145/3617367',
        },
      ],
    },
    footer: {
      text: '發表於 ICFI 2026 · 使用 Next.js 建置',
    },
  },
};
