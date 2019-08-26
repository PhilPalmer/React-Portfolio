let resumeData = {
    "imagebaseurl":"https://philpalmer.github.io/portfolio",
    "name": "Phil Palmer",
    "role": "Bioinformatician",
    "email": "phil.palmer.email@gmail.com",
    "linkedinId":"phil-palmer",
    "skypeid": "phil_palmer_",
    "roleDescription": "I am a bioinformatician who wants to use my career to do as much good as possible.",
    "roleDescription2": "I think I can do this by leveraging technology in areas such as bioinformatics & data science to help prevent disease.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/phil-palmer/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/PhilPalmer",
          "className":"fa fa-github"
        },
        {
          "name":"skype",
          "url":"http://twitter.com/phil_palmer_",
          "className":"fa fa-twitter"
        }
      ],
    "aboutme":"I am currently working at the biotech start-up Lifebit. Prior to this I graduated from the University of Southampton with a first class degree in Biology.",
    "address":"London",
    "website":"https://philpalmer.github.io/portfolio/",
    "education":[
      {
        "UniversityName":"University of Southampton",
        "specialization":"BSc Biology",
        "grade":"First Class Honours",
        "MonthOfPassing":"July",
        "MonthOfStarting":"",
        "YearOfStarting":"2015",
        "MonthOfPassing":"",
        "YearOfPassing":"2018",
        "Achievements": `Thesis: Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples 86%<br />
        Notable modules include:<br />
        <ul>
          <li>BIOL3063 Bioinformatics & Systems Biology 81%</li>
          <li>BIOL2008 Quantitative Methods in Biological & Environmental Science 72%</li>
          <li>BIOL1005 Cell Biology & Genetics 70%</li>
        </ul>
        `
      },
      {
        "UniversityName":"Caterham School",
        "specialization":"A-levels",
        "MonthOfStarting":"",
        "YearOfStarting":"2013",
        "MonthOfPassing":"",
        "YearOfPassing":"2015",
        "Achievements":"Biology B, Business Studies B, Physics C, Mathematics (AS-level) B"
      },
      {
        "UniversityName":"Caterham School",
        "specialization":"IGCSEs",
        "MonthOfStarting":"",
        "YearOfStarting":"2008",
        "MonthOfPassing":"",
        "YearOfPassing":"2013",
        "Achievements":"10 IGCSEs A*-B Including Mathematics and English"
      }
    ],
    "work":[
      {
        "CompanyName":"Lifebit",
        "specialization":"Bioinformatician",
        "MonthOfStarting":"July",
        "YearOfStarting":"2018",
        "MonthOfLeaving":"",
        "YearOfLeaving":"Present",
        "Achievements":"Developing, maintaining & documenting bioinformatics pipelines on the Deploit platform. Have developed Docker & Nextflow pipelines on everything from variant calling to long reads to transcriptomics. For example, adapted a pipeline based on Google’s DeepVariant pipeline to meet the requirements of the open-source community nf-core. Also, regularly interact with clients & have been instrumental in the delivery of numerous key projects."
      }
    ],
    "skillsDescription":"Some of my skills include:",
    "skills":[{
      label: "AWS",
      value: "6"
    }, {
      label: "Bash",
      value: "8"
    }, {
      label: "Bioinformatics",
      value: "8"
    }, {
      label: "Docker",
      value: "7"
    }, {
      label: "JavaScript/React",
      value: "6"
    }, {
        label: "Jupyter",
        value: "6"
    }, {
      label: "Machine Learning",
      value: "6"
    }, {
        label: "Nextflow",
        value: "9"
    }, {
        label: "Python",
        value: "8"
    }, {
      label: "R",
      value: "8"
    }, {
        label: "Statistics",
        value: "7"
    }],
    "portfolio":[
      {
        "name":"nf-core/deepvariant",
        "description":"Google's DeepVariant variant caller as a Nextflow pipeline",
        "imgurl":"https://raw.githubusercontent.com/nf-core/deepvariant/master/docs/images/deepvariant_logo.png",
        "link":"https://github.com/nf-core/deepvariant",
        "tags": ["Bioinformatics pipeline", "DeepVariant", "DNA", "Google", "Nextflow", "Variant Calling"]
      },
      {
        "name":"Jackson Labs Workshop",
        "description":"Prepared & taught a day long bioinformatics workshop to 45 participants in Jackson Labs in the US",
        "imgurl":"images/portfolio/jax-workshop.jpg",
        "link":"https://github.com/lifebit-ai/jax-tutorial",
        "tags": ["Crick Institute", "Docker", "Jackson Labs", "Nextflow", "Workshops"]
      },
      {
        "name":"RShiny Drug Repurposing App",
        "description":"Built an RShiny application to demo to AstraZeneca for a drug repurposing pilot",  
        "imgurl":"images/portfolio/az-dr-rshiny-app.png",
        "link":"https://philpalmer.shinyapps.io/drug_repurposing/",
        "tags": ["AstraZeneca", "Drug Repurposing", "Web development", "R", "RShiny"]
      },
      {
        "name":"Pharmacogenomics pipeline",
        "description":"Pharmacogenomics Nextflow pipeline for the BHKLAB to process the GRAY 2017 dataset",
        "imgurl":"https://avatars3.githubusercontent.com/u/12865570?s=280&v=4",
        "link":"https://github.com/lifebit-ai/pgx-nf/",
        "tags": ["BHKLAB", "Bioinformatics pipeline", "Nextflow", "Pharamcogenomics"]
      },
      {
        "name":"Long reads variant calling pipeline",
        "description":"Nextflow pipeline for mapping, calling germline & structural variance of Oxford Nanopore reads",
        "imgurl":"images/portfolio/ont.png",
        "link":"https://github.com/lifebit-ai/long-reads/",
        "tags": ["Bioinformatics pipeline", "Docker", "Oxford Nanopore", "Nextflow", "Variant Calling"]
      },
      {
        "name":"ECW Converter",
        "description":"Dockerised python scripts & Nextflow pipeline for converting the file format of aerial images, developed for the United Nations Department of Statistics",
        "imgurl":"https://opendatawatch.com/wp-content/uploads/2018/09/UNstats-logo.png",
        "link":"https://github.com/lifebit-ai/ecw-converter",
        "tags": ["Data Science", "Docker", "Nextflow", "Python", "United Nations"]
      },
      {
        "name":"Illumina's Dragen pipeline",
        "description":"Nextflow pipeline for running Illumina's Dragen pipeline including indexing, mapping, germline/somatic variant calling & copy number variant (CNV) analysis",
        "imgurl":"https://d7umqicpi7263.cloudfront.net/img/product/a66b9373-89f0-4e38-94c2-c5f498b07cdc/a44af422-3ea8-450d-b420-a3093981f514.png",
        "link":"https://github.com/lifebit-ai/dragen",
        "tags": ["Bioinformatics pipeline", "CNV", "Dragen", "Illumina", "Nextflow", "Variant Calling"]
      },
      {
        "name":"Thesis",
        "description":"Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples",
        "imgurl":"images/portfolio/igv.png",
        "link":"https://www.dropbox.com/s/9p296tdq5axkakt/dissertation.pdf?dl=0",
        "tags": ["Bash", "Dissertation", "Machine learning", "Python", "Statistics", "University of Southampton"]
      }
    ],
    "moreProjects":[
      {
        "name":"GATK Best Practices",
        "description":"Nextflow pipelines based on GATK best practices",
        "imgurl":"https://www.broadinstitute.org/files/images/GATK-logo-final-on-333.png",
        "link":"https://github.com/lifebit-ai/GATK",
        "tags": ["Bioinformatics pipeline", "Docker", "GATK", "Nextflow", "Variant Calling"]
      },
      {
        "name":"Metagenomics Research",
        "description":"Helped in the user researc & interviews for a metagenomics project. Done with Science Practice & funded by an Innovate UK grant",
        "imgurl":"https://i1.wp.com/blog.lifebit.ai/wp-content/uploads/2019/04/Everyone.png?resize=1024%2C713&ssl=1",
        "link":"https://blog.lifebit.ai/2019/04/23/ux-ui-designer-insights-for-creating-a-user-friendly-clinical-gut-microbiome-ai-based-analysis-platform/",
        "tags": ["Metagenomics", "Research", "User interviews"]
      },
      {
        "name":"GWAS",
        "description":"Nextflow pipeline for Genome Wide Association Studies (GWAS), Phenotypic GWAS (Phewas), Family-based GWAS & UK Biobank Scanner",
        "imgurl":"https://3.bp.blogspot.com/-IwFhdadUevM/TbXRJAQ62gI/AAAAAAAALp8/y8qDbY-jmC8/s1600/2011-04-19+GGD+manhattan1.png",
        "link":"https://github.com/lifebit-ai/h3agwas",
        "tags": ["Bioinformatics pipeline", "Docker", "GWAS", "Nextflow"]
      },
      {
        "name":"Clean meat hackathon",
        "description":"Was on the winning team of the world's first clean meat hackathon",
        "imgurl":"https://media.licdn.com/dms/image/C4E22AQGWr36JnYnMfA/feedshare-shrink_8192/0?e=1569456000&v=beta&t=u5cYZu4PWY_1WrB_I853XozpEvunqj_tHvPeR-eRjC8",
        "link":"https://www.linkedin.com/feed/update/urn:li:activity:6542091105389944832/",
        "tags": ["Clean meat", "Hackathon", "Machine learning"]
      },
      {
        "name":"Imputation & Ancestry",
        "description":"Improved/benchmarked imputation pipeline, added input validation with 23AndMe validator RScript, built imputation RShiny app & ancestry pipeline",
        "imgurl":"https://i0.wp.com/blog.lifebit.ai/wp-content/uploads/2019/05/imputation_plot.png?fit=1188%2C653&ssl=1",
        "link":"https://github.com/lifebit-ai/common-latest-geno",
        "tags": ["Bioinformatics pipeline", "Docker", "Imputation", "Nextflow", "R", "RShiny"]
      },
      {
        "name":"FlowCraft",
        "description":"Contributed components to the open source project FlowCraft which allows users to build Nextflow pipelines with one command",
        "imgurl":"https://avatars0.githubusercontent.com/u/38907429?s=400&v=4",
        "link":"https://github.com/assemblerflow/flowcraft",
        "tags": ["Bioinformatics pipeline builder", "Docker", "Nextflow"]
      },
      {
        "name":"RNASeq",
        "description":"Differential gene expression using DESeq2 & Plant RNASeq Nextflow pipelines",
        "imgurl":"images/portfolio/salmon_multiqc.png",
        "link":"",
        "tags": ["Bioinformatics pipeline", "Docker", "Nextflow", "R", "RNASeq"]
      },
      {
        "name":"Pangenome",
        "description":"Pan-genomics Nextflow pipeline for annotating prokaryotic genomes & calculating the pan genome",
        "imgurl":"http://sanger-pathogens.github.io/Roary/images/pangenome_matrix.png",
        "link":"https://github.com/lifebit-ai/roary",
        "tags": ["Bioinformatics pipeline", "Docker", "Metagenomics", "Nextflow", "Pangenome"]
      }
    ]
  }
  
  export default resumeData