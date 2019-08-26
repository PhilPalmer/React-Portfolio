(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(11),r=a.n(l),o=(a(20),a(1)),s=a(2),c=a(5),m=a(3),p=a(4),h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",e.name.split(" ")[0]),n.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),n.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription2),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("i",{className:e.className})))})))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(i.Component),u=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,e.aboutme),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e.name),n.a.createElement("br",null),n.a.createElement("span",null,e.address),n.a.createElement("br",null),n.a.createElement("span",null,e.website)))))))}}]),t}(i.Component),f=a(12),g=a.n(f),d=a(8),b=a.n(d),v=a(9),w=a.n(v),E=a(13),k=a.n(E);w.a.fcRoot(g.a,b.a,k.a);var N,y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={id:"chart",renderAt:"chart-container",type:"column2d",width:925,height:600,dataFormat:"json",dataSource:{chart:{captionFontSize:"24",yAxisName:"Level",baseFontSize:"14",yAxisMaxValue:"10",yAxisMinValue:"0",theme:"fusion"},data:this.props.resumeData.skills}};return n.a.createElement("div",{id:"chart-container"},n.a.createElement(w.a,e))}}]),t}(i.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.CompanyName),n.a.createElement("p",{className:"info"},e.specialization,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.UniversityName),n.a.createElement("p",{className:"info"},e.specialization,", ",e.grade,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfPassing," ",e.YearOfPassing)),n.a.createElement("p",null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.Achievements}}))))}))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,e.skillsDescription),n.a.createElement(y,{resumeData:e}),n.a.createElement("div",{className:"bars"}))))}}]),t}(i.Component),j=a(14),A=a(6),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={portfolio:a.props.resumeData.portfolio,showAllProjects:!1},a.handleAddClick=a.handleAddClick.bind(Object(A.a)(a)),a.handleRemoveClick=a.handleRemoveClick.bind(Object(A.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleAddClick",value:function(){var e;(e=this.state.portfolio).push.apply(e,Object(j.a)(this.props.resumeData.moreProjects)),this.setState({portfolio:this.state.portfolio,showAllProjects:!this.state.showAllProjects})}},{key:"handleRemoveClick",value:function(){var e=this,t=this.state.portfolio.filter(function(t){return!e.props.resumeData.moreProjects.includes(t)});this.setState({portfolio:t,showAllProjects:!this.state.showAllProjects})}},{key:"render",value:function(){return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{id:"projects",className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Projects."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},this.state.portfolio&&this.state.portfolio.map(function(e){return n.a.createElement("div",{className:"columns portfolio-item"},n.a.createElement("a",{href:"".concat(e.link),target:"_blank"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name),n.a.createElement("p",{id:"project-description",dangerouslySetInnerHTML:{__html:e.description}}),n.a.createElement("ul",null,e.tags&&e.tags.map(function(e){return n.a.createElement("li",{key:e},e)})))))))})),n.a.createElement("div",{id:"portfolio-btn"},this.state.showAllProjects?n.a.createElement("input",{type:"submit",value:"Show fewer projects",id:"portfolio-btn",onClick:this.handleRemoveClick}):n.a.createElement("input",{type:"submit",value:"Show more projects",id:"portfolio-btn",onClick:this.handleAddClick})))))}}]),t}(i.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},"Please don't hesitate to contact me for questions, work, advice or anything else below:"))),n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"eigth columns footer-widgets"},n.a.createElement("div",{className:"widget"},n.a.createElement("h4",null,n.a.createElement("i",{class:"fa fa-envelope-o"}),n.a.createElement("a",{href:"mailto:".concat(e.email),target:"_blank"}," ",e.email))))))}}]),t}(i.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(i.Component),P=a(7),x={imagebaseurl:"https://philpalmer.github.io/portfolio",name:"Phil Palmer",role:"Bioinformatician",email:"phil.palmer.email@gmail.com",linkedinId:"phil-palmer",skypeid:"phil_palmer_",roleDescription:"I am a bioinformatician who wants to use my career to do as much good as possible.",roleDescription2:"I think I can do this by leveraging technology in areas such as bioinformatics & data science to help prevent disease.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/phil-palmer/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/PhilPalmer",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/phil_palmer_",className:"fa fa-twitter"}],aboutme:"I am currently working at the biotech start-up Lifebit. Prior to this I graduated from the University of Southampton with a first class degree in Biology.",address:"London",website:"https://philpalmer.github.io/portfolio/",education:[(N={UniversityName:"University of Southampton",specialization:"BSc Biology",grade:"First Class Honours",MonthOfPassing:"July",MonthOfStarting:"",YearOfStarting:"2015"},Object(P.a)(N,"MonthOfPassing",""),Object(P.a)(N,"YearOfPassing","2018"),Object(P.a)(N,"Achievements","Thesis: Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples 86%<br />\n        Notable modules include:<br />\n        <ul>\n          <li>BIOL3063 Bioinformatics & Systems Biology 81%</li>\n          <li>BIOL2008 Quantitative Methods in Biological & Environmental Science 72%</li>\n          <li>BIOL1005 Cell Biology & Genetics 70%</li>\n        </ul>\n        "),N),{UniversityName:"Caterham School",specialization:"A-levels",MonthOfStarting:"",YearOfStarting:"2013",MonthOfPassing:"",YearOfPassing:"2015",Achievements:"Biology B, Business Studies B, Physics C, Mathematics (AS-level) B"},{UniversityName:"Caterham School",specialization:"IGCSEs",MonthOfStarting:"",YearOfStarting:"2008",MonthOfPassing:"",YearOfPassing:"2013",Achievements:"10 IGCSEs A*-B Including Mathematics and English"}],work:[{CompanyName:"Lifebit",specialization:"Bioinformatician",MonthOfStarting:"July",YearOfStarting:"2018",MonthOfLeaving:"",YearOfLeaving:"Present",Achievements:"Developing, maintaining & documenting bioinformatics pipelines on the Deploit platform. Have developed Docker & Nextflow pipelines on everything from variant calling to long reads to transcriptomics. For example, adapted a pipeline based on Google\u2019s DeepVariant pipeline to meet the requirements of the open-source community nf-core. Also, regularly interact with clients & have been instrumental in the delivery of numerous key projects."}],skillsDescription:"Some of my skills include:",skills:[{label:"AWS",value:"6"},{label:"Bash",value:"8"},{label:"Bioinformatics",value:"8"},{label:"Docker",value:"7"},{label:"JavaScript/React",value:"6"},{label:"Jupyter",value:"6"},{label:"Machine Learning",value:"6"},{label:"Nextflow",value:"9"},{label:"Python",value:"8"},{label:"R",value:"8"},{label:"Statistics",value:"7"}],portfolio:[{name:"nf-core/deepvariant",description:"Google's <a href='<https://github.com/nf-core/deepvariant'>DeepVariant</a> variant caller as a Nextflow pipeline, developed as part of the open source <a href='https://blog.lifebit.ai/2018/11/20/developing-nf-core-deepvariant-a-google-variant-caller-a-tutorial-for-nextflow-noobs/' target='_blank'>nf-core</a> community",imgurl:"https://raw.githubusercontent.com/nf-core/deepvariant/master/docs/images/deepvariant_logo.png",link:"https://github.com/nf-core/deepvariant",tags:["Bioinformatics pipeline","DeepVariant","DNA","Google","Nextflow","Variant Calling"]},{name:"Jackson Labs Workshop",description:"Prepared & taught a day long bioinformatics workshop to 45 participants in <a href='https://github.com/lifebit-ai/jax-tutorial' target='_blank'>Jackson Labs</a> in the US. Have also prepared & taught a workshop at the <a href='https://github.com/lifebit-ai/lbf-hack-tutorial' target='_blank'>Francis Crick Institute</a>",imgurl:"images/portfolio/jax-workshop.jpg",link:"https://github.com/lifebit-ai/jax-tutorial",tags:["Crick Institute","Docker","Jackson Labs","Nextflow","Workshops"]},{name:"RShiny Drug Repurposing App",description:"Built an <a href='https://philpalmer.shinyapps.io/drug_repurposing/' target='_blank'>RShiny application</a> to demo to AstraZeneca for a drug repurposing pilot",imgurl:"images/portfolio/az-dr-rshiny-app.png",link:"https://philpalmer.shinyapps.io/drug_repurposing/",tags:["AstraZeneca","Drug Repurposing","Web development","R","RShiny"]},{name:"Pharmacogenomics pipeline",description:"Pharmacogenomics Nextflow pipeline for the BHKLAB to process the GRAY <a href='https://github.com/lifebit-ai/GRAY' target='_blank'>2013</a> & <a href='https://github.com/lifebit-ai/pgx-nf/' target='_blank'>2017</a> dataset",imgurl:"https://avatars3.githubusercontent.com/u/12865570?s=280&v=4",link:"https://github.com/lifebit-ai/pgx-nf/",tags:["BHKLAB","Bioinformatics pipeline","Nextflow","Pharamcogenomics"]},{name:"Long reads variant calling pipeline",description:"<a href='https://github.com/lifebit-ai/long-reads/' target='_blank'>Nextflow pipeline</a> for mapping, calling germline & structural variance of Oxford Nanopore reads",imgurl:"images/portfolio/ont.png",link:"https://github.com/lifebit-ai/long-reads/",tags:["Bioinformatics pipeline","Docker","Oxford Nanopore","Nextflow","Variant Calling"]},{name:"ECW Converter",description:"<a href='https://github.com/lifebit-ai/ecw-converter/tree/master/ecw_converter' target='_blank'>Dockerised python scripts & Nextflow pipeline</a> for converting the file format of aerial images, developed for the United Nations Department of Statistics",imgurl:"https://opendatawatch.com/wp-content/uploads/2018/09/UNstats-logo.png",link:"https://github.com/lifebit-ai/ecw-converter",tags:["Data Science","Docker","Nextflow","Python","United Nations"]},{name:"Illumina's Dragen pipeline",description:"<a href='https://github.com/lifebit-ai/dragen' target='_blank'>Nextflow pipeline</a> for running Illumina's Dragen pipeline including indexing, mapping, germline/somatic variant calling & copy number variant (CNV) analysis",imgurl:"https://d7umqicpi7263.cloudfront.net/img/product/a66b9373-89f0-4e38-94c2-c5f498b07cdc/a44af422-3ea8-450d-b420-a3093981f514.png",link:"https://github.com/lifebit-ai/dragen",tags:["Bioinformatics pipeline","CNV","Dragen","Illumina","Nextflow","Variant Calling"]},{name:"Thesis",description:"<a href='https://www.dropbox.com/s/9p296tdq5axkakt/dissertation.pdf?dl=0' target='_blank'>Dissertation</a> which I achieved 86% in: Differences in Telomere Length Predicted from the Exome Data of Bladder Cancer and Matched Control Tissue Samples",imgurl:"images/portfolio/igv.png",link:"https://www.dropbox.com/s/9p296tdq5axkakt/dissertation.pdf?dl=0",tags:["Bash","Dissertation","Machine learning","Python","Statistics","University of Southampton"]}],moreProjects:[{name:"GATK Best Practices",description:"Developed multiple Nextflow pipelines based on GATK best practices, including <a href='https://github.com/lifebit-ai/GATK' target='_blank'>germline</a>, <a href='https://github.com/cgpu/somatic-variant-caller' target='_blank'>somatic</a>, structural variant calling & <a href='https://github.com/lifebit-ai/consensus-variant-caller' target='_blank'>annotation</a>",imgurl:"https://www.broadinstitute.org/files/images/GATK-logo-final-on-333.png",link:"https://github.com/lifebit-ai/GATK",tags:["Bioinformatics pipeline","Docker","GATK","Nextflow","Variant Calling"]},{name:"Metagenomics Research",description:"Helped in the research & user interviews for a <a href='https://blog.lifebit.ai/2019/04/23/ux-ui-designer-insights-for-creating-a-user-friendly-clinical-gut-microbiome-ai-based-analysis-platform/' target='_blank'>microbiome metagenomics project</a>. Conducted with Science Practice & funded by Innovate UK",imgurl:"https://i1.wp.com/blog.lifebit.ai/wp-content/uploads/2019/04/Everyone.png?resize=1024%2C713&ssl=1",link:"https://blog.lifebit.ai/2019/04/23/ux-ui-designer-insights-for-creating-a-user-friendly-clinical-gut-microbiome-ai-based-analysis-platform/",tags:["Metagenomics","Research","User interviews"]},{name:"GWAS",description:"Nextflow pipeline for Genome Wide Association Studies (<a href='https://github.com/lifebit-ai/h3agwas' target='_blank'>GWAS</a>), Phenotypic GWAS (<a href='https://github.com/lifebit-ai/phewas' target='_blank'>Phewas</a>), <a href='https://github.com/lifebit-ai/fam-gwas' target='_blank'>Family-based GWAS</a> & <a href='https://github.com/lifebit-ai/PHESANT' target='_blank'>UK Biobank Scanner</a>",imgurl:"https://3.bp.blogspot.com/-IwFhdadUevM/TbXRJAQ62gI/AAAAAAAALp8/y8qDbY-jmC8/s1600/2011-04-19+GGD+manhattan1.png",link:"https://github.com/lifebit-ai/h3agwas",tags:["Bioinformatics pipeline","Docker","GWAS","Nextflow"]},{name:"Clean meat hackathon",description:"Was on the winning team of the world's first <a href='https://www.linkedin.com/feed/update/urn:li:activity:6542091105389944832/' target='_blank'>clean meat hackathon</a>",imgurl:"https://media.licdn.com/dms/image/C4E22AQGWr36JnYnMfA/feedshare-shrink_8192/0?e=1569456000&v=beta&t=u5cYZu4PWY_1WrB_I853XozpEvunqj_tHvPeR-eRjC8",link:"https://www.linkedin.com/feed/update/urn:li:activity:6542091105389944832/",tags:["Clean meat","Hackathon","Machine learning"]},{name:"Imputation & Ancestry",description:"Improved/<a href='https://blog.lifebit.ai/2019/05/30/what-is-the-best-imputation-pipeline/' target='_blank'>benchmarked</a> imputation pipeline, added input validation with <a href='https://github.com/lifebit-ai/common-latest-geno/blob/master/bin/validate_23AndMe.R' target='_blank'>23AndMe validator RScript</a>, built imputation <a href='https://philpalmer.shinyapps.io/lifebit/' target='_blank'>RShiny app</a> & <a href='https://github.com/lifebit-ai/fast-ngs-admix' target='_blank'>ancestry pipeline</a>",imgurl:"https://i0.wp.com/blog.lifebit.ai/wp-content/uploads/2019/05/imputation_plot.png?fit=1188%2C653&ssl=1",link:"https://github.com/lifebit-ai/common-latest-geno",tags:["Bioinformatics pipeline","Docker","Imputation","Nextflow","R","RShiny"]},{name:"FlowCraft",description:"Contributed components to the open source project <a href='https://github.com/assemblerflow/flowcraft' target='_blank'>FlowCraft</a> which allows users to build Nextflow pipelines with one command",imgurl:"https://avatars0.githubusercontent.com/u/38907429?s=400&v=4",link:"https://github.com/assemblerflow/flowcraft",tags:["Bioinformatics pipeline builder","Docker","Nextflow"]},{name:"RNASeq",description:"Differential gene expression using <a href='https://github.com/PhilPalmer/RNASeq-nf-dseq2' target='_blank'>DESeq2</a> & <a href='https://github.com/lifebit-ai/Plant-RNASeq' target='_blank'>Plant RNASeq</a> Nextflow pipelines",imgurl:"images/portfolio/salmon_multiqc.png",link:"https://github.com/PhilPalmer/RNASeq-nf-dseq2",tags:["Bioinformatics pipeline","Docker","Nextflow","R","RNASeq"]},{name:"Pangenome",description:"Pan-genomics <a href='https://github.com/lifebit-ai/roary' target='_blank'>Nextflow pipeline</a> for annotating prokaryotic genomes & calculating the pan genome",imgurl:"http://sanger-pathogens.github.io/Roary/images/pangenome_matrix.png",link:"https://github.com/lifebit-ai/roary",tags:["Bioinformatics pipeline","Docker","Metagenomics","Nextflow","Pangenome"]}]},_=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{resumeData:x}),n.a.createElement(u,{resumeData:x}),n.a.createElement(S,{resumeData:x}),n.a.createElement(O,{resumeData:x}),n.a.createElement(D,{resumeData:x}),n.a.createElement(C,{resumeData:x}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.cb38dc20.chunk.js.map