<template>
<div class="flex justify-center text-gray-900 h-full">
  <div class="lg:w-2/3 h-full mt-3 overflow-y-auto">
    <div class="bg-gray-100 rounded-md p-4 mb-4">
      <div class="flex justify-center">
        <img class="bg-gray-600 w-2/4 mb-2 rounded-md" src="../../assets/profile_img.jpeg" alt="Bild"/>
      </div>
      <h1 class="font-bold text-2xl text-center"> My name is Daniel. </h1>
      <p class="text-center text-lg font-bold p-4">
        I am PhD student at the Otto-von-Guericke University. My topic is optimizing graph databases and graph learning for
        large clinical and biological datasets. Therefore, I already wrote a literature review with several amazing co-authors.
        Furthermore, I applied several graph learning algorithms like Graph Neural Networks
        on diverse datasets and aim to improve the predictive power of machine learning using graph structures.
      </p>
    </div>



    <div class="flex gap-2">
      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Professional Career</h4>
        <ul class="list-disc p-4">
          <li>Research fellow (full-time) at the Otto-von-Guericke University: January 2023 till now</li>
          <li>Research fellow (part-time) at the Otto-von-Guericke University & Software developer (part-time) at the METOP GmbH: December 2021 - January 2023</li>
          <li>Software developer (full-time) at the METOP GmbH: September 2021 - December 2021</li>
          <li>Software developer (Internship) at the METOP GmbH: August 2021 - September 2021</li>
          <li>Research Assistant (HiWi part-time) at the Otto-von-Guericke University: May 2021 - August 2021</li>
          <li>Research Assistant (HiWi part-time) at the Otto-von-Guericke University: August 2020 - January 2021</li>
          <li>Tutor (HiWi part-time) at the Otto-von-Guericke University: October 2019 - January 2020</li>
        </ul>
      </div>


      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Publications</h4>
        <ul class="list-disc p-4">
          <li>
            <h4>The importance of graph databases and graph learning for clinical applications</h4>
            <p>Daniel Walke, Daniel Micheel, Kay Schallert, Thilo Muth, Gunter Saake, David Broneske, Robert Heyer</p>
          </li>
        </ul>
      </div>
    </div>



    <div class="flex gap-2">
      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Education</h4>
        <ul class="list-disc p-4">
          <li>Master of Science in Biosystems Engineering - final grade 1.3 ('very good')</li>
          <li>Bachelor of Science in Biosystems Engineering - final grade 1.6 ('good')</li>
          <li>Abitur - final grade 2.0 ('good')</li>
        </ul>
      </div>
      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Skills</h4>
        <ul class="list-disc p-4">
          <li>Web development (HTML, CSS, JavaScript, TypeScript, React, Vue)</li>
          <li>Backend-technologies (Java, Python, Parse as BaaS)</li>
          <li>Machine learning and graph learning (pandas, numpy, scikit-learn, PyTorch, PyTorchGeometric)</li>
        </ul>
      </div>
    </div>

    <div class="flex gap-2">
      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Interests</h4>
        <ul class="list-disc p-4">
          <li>Coding</li>
          <li>Gym</li>
          <li>Listening to Podcasts (HubermanLab, Lex Friedman)</li>
        </ul>
      </div>

      <div class="bg-gray-100 rounded-md p-4 font-bold mb-4">
        <h4 class="text-lg">Contact</h4>
        <ul class="list-disc p-4">
          <li>Private: daniel-walke@t-online.de</li>
          <li>Academic: danie.walke@ovgu.de</li>
        </ul>
      </div>

    </div>


    <div class="text-sm">Additional Notes: This will be my personal portofolio page. For now this is just some hobby to keep my vue & tailwind skills sharp. Hopefully you will see soe more beautiful stuff here soon.</div>
    <div>Current date: 08.10.23 - Project initialization</div>
  </div>
</div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>

</style>