let resumeData = {
    "imagebaseurl":"https://philpalmer.github.io",
    "name": "Phil Palmer",
    "role": "Bioinformatician",
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
    // "aboutme":"I am currently a pre-final year student at The LNM Institute of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
    "address":"London",
    "website":"https://philpalmer.github.io",
    "education":[
      {
        "UniversityName":"University of Southampton",
        "specialization":"BSc Biology",
        "grade":"First Class Honours",
        "MonthOfPassing":"July",
        "YearOfPassing":"2018",
        "Achievements":"First Class Honours.\nThesis: Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples 86%\nNotable modules include:\nBIOL3063 Bioinformatics & Systems Biology 81%\nBIOL2008 Quantitative Methods in Biological & Environmental Science 72%\nBIOL1005 Cell Biology & Genetics 70%"
      },
      {
        "UniversityName":"Caterham School",
        "specialization":"A-levels",
        "MonthOfPassing":"June",
        "YearOfPassing":"2015",
        "Achievements":"Biology B, Business Studies B, Physics C, Mathematics (AS-level) B"
      },
      {
        "UniversityName":"Caterham School",
        "specialization":"IGCSEs",
        "MonthOfPassing":"June",
        "YearOfPassing":"2013",
        "Achievements":"10 IGCSEs A*-B Including Mathematics and English"
      }
    ],
    "work":[
      {
        "CompanyName":"Lifebit",
        "specialization":"Bioinformatician",
        "MonthOfLeaving":"-",
        "YearOfLeaving":"Present",
        "Achievements":"Developing, maintaining & documenting bioinformatics pipelines on the Deploit platform. Have developed Docker & Nextflow pipelines on everything from variant calling to long reads to transcriptomics. For example, adapted a pipeline based on Google’s DeepVariant pipeline to meet the requirements of the open-source community nf-core. Also, regularly interact with clients & have been instrumental in the delivery of numerous key projects."
      }
    ],
    "skillsDescription":"Some of my skills include:",
    "skills":[{
      label: "Docker",
      value: "7"
    }, {
      label: "AWS",
      value: "6"
    }, {
        label: "Jupyter",
        value: "6"
    }, {
        label: "Nextflow",
        value: "9"
    }, {
        label: "R",
        value: "8"
    }, {
        label: "Python",
        value: "8"
    }, {
        label: "Bash",
        value: "8"
    }, {
        label: "JavaScript/React",
        value: "6"
    }, {
        label: "Bioinformatics",
        value: "8"
    }, {
        label: "Statistics",
        value: "7"
    }, {
      label: "Machine Learning",
      value: "6"
    }, {
        label: "Modesty",
        value: "2"
    }],
    "portfolio":[
      {
        "name":"nf-core/deepvariant",
        "description":"Google's DeepVariant variant caller as a Nextflow pipeline",
        "imgurl":"https://raw.githubusercontent.com/nf-core/deepvariant/master/docs/images/deepvariant_logo.png",
        "link":"https://github.com/nf-core/deepvariant"
      },
      {
        "name":"Jackson Labs Workshop",
        "description":"Prepared & taught a day long bioinformatics workshop to 45 participants in Jackson Labs in the US",
        "imgurl":"images/portfolio/jax-workshop.jpg"
      },
      {
        "name":"RShiny Drug Repurposing App",
        "description":"Built an RShiny application to demo to AstraZeneca for a drug repurposing pilot",  
        "imgurl":"images/portfolio/az-dr-rshiny-app.png"
      },
      {
        "name":"Pharmacogenomics pipeline",
        "description":"Pharmacogenomics Nextflow pipeline for the BHKLAB to process the GRAY 2017 dataset",
        "imgurl":"https://avatars3.githubusercontent.com/u/12865570?s=280&v=4"
      },
      {
        "name":"Long reads variant calling pipeline",
        "description":"Nextflow pipeline for mapping, calling germline & structural variance of Oxford Nanopore reads",
        "imgurl":"images/portfolio/ont.png"
      },
      {
        "name":"ECW Converter",
        "description":"Dockerised python scripts & Nextflow pipeline for converting the file format of aerial images, developed for the United Nations Department of Statistics",
        "imgurl":"https://opendatawatch.com/wp-content/uploads/2018/09/UNstats-logo.png"
      },
      {
        "name":"Illumina's Dragen pipeline",
        "description":"Nextflow pipeline for running Illumina's Dragen pipeline including indexing, mapping, germline/somatic variant calling & CNV analysis",
        "imgurl":"https://d7umqicpi7263.cloudfront.net/img/product/a66b9373-89f0-4e38-94c2-c5f498b07cdc/a44af422-3ea8-450d-b420-a3093981f514.png"
      },
      {
        "name":"Thesis",
        "description":"Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples",
        "imgurl":"images/portfolio/igv.png"
      }
    ]
  }
  
  export default resumeData