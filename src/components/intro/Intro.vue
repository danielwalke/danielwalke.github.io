<template>
  <div>
    <div class="bg-gray-100 rounded-md p-4 mb-4 text-black min-h-full">
      <div class="flex justify-center">
        <img class="profile-img" src="../../assets/profile_img.jpeg" alt="Bild"/>
      </div>
      <h1 class="name-text"> My name is Daniel Walke. </h1>
      <div class="flex justify-center">
        <p class="intro-text">
          I am PhD student at the Otto-von-Guericke University. The topic for my PhD is optimizing graph databases and graph learning for
          large clinical and biological datasets. Therefore, I applied several graph learning algorithms like Graph Neural Networks
          on diverse datasets and aim to improve the predictive power of machine learning using graph structures.
        </p>
      </div>
      <a class="flex justify-center mt-4 cursor-pointer block scroll-smooth" href="#career">
        <img src="../../assets/double_down.svg" class="scale-90 animate-bounce h-12" alt="picture"/>
      </a>

    </div>

    <div class="flex justify-center text-gray-900 h-full w-full scroll-smooth">
    <div class="lg:w-2/3 pt-3 w-full">

      <h4 class="subsection-header" id="career">Professional Career.</h4>


      <div class="row">
        <IntroBox header="Research fellow (full-time)">
          <li>Where? <div class="text-right">Otto-von-Guericke University</div></li>
          <li>When? <div class="text-right">Since January 2023</div></li>
          <li>What? <div class="text-right whitespace-pre-wrap">Applying graph learning algorithms on sepsis complete blood count data (pandas, numpy, scikit-learn,
            PyTorch, PyG)</div></li>
        </IntroBox>

        <IntroBox header="Research fellow (part-time)">
          <li>Where? <div class="text-right">Otto-von-Guericke University</div></li>
          <li>When? <div class="text-right">December 2021 - December 2022</div></li>
          <li>What? <div class="text-right">Literature survey about graph databases and graph learning</div></li>
        </IntroBox>
      </div>


      <div class="row">
        <IntroBox header="Software developer (part-time)">
          <li>Where? <div class="text-right">METOP GmbH</div></li>
          <li>When? <div class="text-right">December 2021 - December 2022</div></li>
          <li>What? <div class="text-right">Web development (Vue, JavaScript, TypeScipt, Parse)</div></li>
        </IntroBox>

        <IntroBox header="Software developer (full-time)">
          <li>Where? <div class="text-right">METOP GmbH</div></li>
          <li>When? <div class="text-right">August 2021 - November 2021</div></li>
          <li>What? <div class="text-right">Web development (Vue, JavaScript, Parse)</div></li>
        </IntroBox>
      </div>

      <div class="row">
        <IntroBox header="Research Assistant (part-time)">
          <li>Where? <div class="text-right">Otto-von-Guericke University</div></li>
          <li>When? <div class="text-right">May 2021 - August 2021</div></li>
          <li>What? <div class="text-right">Paper writing & Web development (ReactJS) with Java Backend</div></li>
        </IntroBox>

        <IntroBox header="Research Assistant (part-time)">
          <li>Where? <div class="text-right">Otto-von-Guericke University</div></li>
          <li>When? <div class="text-right">August 2020 - January 2021</div></li>
          <li>What? <div class="text-right">Web development (ReactJS) with Java Backend</div></li>
        </IntroBox>

        <IntroBox header="Tutor (part-time)">
          <li>Where? <div class="text-right">Otto-von-Guericke University</div></li>
          <li>When? <div class="text-right">October 2019 - January 2020</div></li>
          <li>What? <div class="text-right">Correction of MATLAB exercises for simulating biotechnological processes</div></li>
        </IntroBox>
      </div>

      <h4 class="subsection-header">Publications.</h4>

      <div class="row">
        <IntroBox header="The importance of graph databases and graph learning for clinical applications">
          <li>Authors: Daniel Walke*, Daniel Micheel*, Kay Schallert, Thilo Muth, Gunter Saake, David Broneske, Robert Heyer</li>
          <li>Journal: DATABASE The Journal of Biological Databses and Curation</li>
          <li>Link: <a href="https://academic.oup.com/database/article/doi/10.1093/database/baad045/7222237" target="_blank">Publication</a></li>
        </IntroBox>

        <IntroBox header="MPA_Pathway_Tool: User-Friendly, Automatic Assignment of
              Microbial Community Data on Metabolic Pathways">
          <li>Authors: Daniel Walke*, Kay Schallert, Prasanna Ramesh, Dirk Benndorf, Emanuel Lange, Udo Reichl, Robert Heyer</li>
          <li>Journal: International Journal of Molecular Sciences</li>
          <li>Link: <a href="https://pure.mpg.de/rest/items/item_3348333/component/file_3348946/content" target="_blank">Publication</a></li>
        </IntroBox>
      </div>

      <h4 class="subsection-header">Education.</h4>

      <div class="row">
        <IntroBox header="M. Sc. Biosystems engineering">
          <li>Final grade: 1.3 ('very good')</li>
          <li>Master thesis: MPA_Pathway_Tool: User-friendly, automatic assignment of microbial community data on metabolic pathways (grade: 1.0)</li>
          <li>Otto-von-Guericke University</li>
        </IntroBox>

        <IntroBox header="B. Sc. Biosystems engineering">
          <li>Final grade: 1.6 ('good')</li>
          <li>Bachelor thesis: Establishment of a new primer set for analyzing the gene expression in <div class="italic">Physarum polychephalum</div> (grade: 1.2)</li>
          <li>Otto-von-Guericke University</li>
        </IntroBox>

        <IntroBox header="Abitur">
          <li>Final grade: 2.0 ('good')</li>
          <li>Advanced Courses: Mathematics and Biology</li>
          <li>Gymnasium Carolinum Bernburg</li>
        </IntroBox>
      </div>

      <h4 class="subsection-header">Skills.</h4>

      <div class="row">

        <IntroBox header="Web development">
          <li>HTML, CSS, JavaScript</li>
          <li>ReactJS</li>
          <li>Vue (with JS & TS)</li>
          <li>Used backends (Java, Python, Parse as BaaS)</li>
        </IntroBox>

        <IntroBox header="Machine learning & graph learning">
          <li>Pandas</li>
          <li>Numpy</li>
          <li>Scikit-learn</li>
          <li>PyTorch</li>
          <li>PyTorch Geometric</li>
        </IntroBox>

        <IntroBox header="Modeling biotechnological processes">
          <li>MATLAB</li>
          <li>ODE solver</li>
          <li>fmin-search</li>
        </IntroBox>
      </div>


      <h4 class="subsection-header">Interests.</h4>

      <div class="row">

        <IntroBox header="Coding">
          <li>Like doing some coding challenges on platforms like <a class="underline" target="_blank" href="https://leetcode.com/dwalke/">LeetCode</a></li>
          <li>I also enjoy making some small coding projects or testing out new stuff.</li>
        </IntroBox>
        <IntroBox header="Sports & Nutrition">
          <li>Doing weight training with Push-Pull-Leg Split</li>
          <li>Enjoy cooking and try to achieve optimal nutritional supply.</li>
        </IntroBox>

        <IntroBox header="Listening to Podcasts (Recommendations)">
          <li><a href="https://www.hubermanlab.com/podcast" target="_blank">Huberman Lab Podcast</a></li>
          <li><a href="https://lexfridman.com/podcast/" target="_blank">Lex Fridman Podcast</a></li>
        </IntroBox>
      </div>

      <h4 class="subsection-header">Contact.</h4>

      <div class="row">
        <IntroBox header="Academic Purposes (Cooperation, Questions, Talks)">
          <li>daniel.walke@ovgu.de</li>
        </IntroBox>

        <IntroBox header="Private Purposes (Questions regarding this page & Job requests)">
          <li>daniel-walke@t-online.de</li>
        </IntroBox>
      </div>

      <div class="text-sm">Additional Notes: This will be my personal portofolio page. For now this is just some hobby to keep my vue & tailwind skills sharp. Hopefully you will see soe more beautiful stuff here soon.</div>
      <div class="text-sm">Currently, this side seems a bit dead. I will add more animations and clearer design soon.</div>
      <div>Current date: 31.10.23 - First prototype portfolio</div>
      <div>Current date: 08.10.23 - Project initialization</div>
  </div>
    </div>
  </div>
</template>

<script setup>
import IntroBox from "./IntroBox.vue";
import {ref} from "vue";

const isSmall = ref(window.innerWidth<=500)

</script>

<style scoped>
.row{
  @apply flex overflow-x-auto w-full flex-nowrap whitespace-nowrap pr-4 pl-4
  lg:flex-nowrap lg:flex-row lg:whitespace-normal
}

.row:first-child{
  @apply ml-auto lg:ml-0
}
.row:last-child{
  @apply mr-auto mr-4 lg:mr-0
}

.subsection-header{
  @apply text-4xl text-center font-bold p-4 mb-4 mt-4 select-none
}

ul{
  @apply lg:p-4 p-2 text-sm lg:text-base
}

li{
  @apply lg:mb-2 text-lg ml-2 m-2 lg:p-0
}

a{
  @apply underline mb-2
}

.profile-img{
  @apply w-3/4 lg:w-1/3 mb-4 rounded-md max-w-[400px]
}

.intro-text{
  @apply text-base text-center w-full text-lg lg:text-2xl font-bold p-4 lg:w-3/5
}

.name-text{
  @apply font-bold text-2xl lg:text-3xl text-center
}
</style>