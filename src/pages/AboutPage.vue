<template>
  <q-page>
    <!-- content -->
    <div>
      <q-parallax src="../assets/dtlaDark.jpg">
        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 1 + (1 - scope.percentScrolled) * 0.55,
              left: 0,
              right: 0,
            }"
          >
            <img
              src="../assets/Vinnie-Lopez-white-high-res.png"
              style="width: 640px; height: 425px"
            />
          </div>
        </template>
      </q-parallax>
    </div>

    <div class="q-pa-md bg-grey">
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          Picture of me
          <q-img src="../assets/avatarimg2.jpg" :ratio="16 / 9" />
        </div>

        <div class="col-8">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            quibusdam cumque nobis laudantium pariatur accusamus architecto,
            voluptates deserunt necessitatibus, dignissimos id. Aperiam illum
            voluptatibus sed similique, voluptatum sit ullam, maxime sint
            numquam, expedita dicta quo dolores odio perspiciatis eligendi
            ratione debitis aut est libero iure iusto architecto nihil.
            Temporibus fuga tempore nobis fugit repellendus consequatur sit
            adipisci aspernatur deserunt! Aliquam at iusto quibusdam consectetur
            eos hic architecto ullam autem itaque! Adipisci cupiditate enim
            eligendi veniam voluptates dolorum ullam quaerat expedita?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            quibusdam cumque nobis laudantium pariatur accusamus architecto,
            voluptates deserunt necessitatibus, dignissimos id. Aperiam illum
            voluptatibus sed similique, voluptatum sit ullam, maxime sint
            numquam, expedita dicta quo dolores odio perspiciatis eligendi
            ratione debitis aut est libero iure iusto architecto nihil.
            Temporibus fuga tempore nobis fugit repellendus consequatur sit
            adipisci aspernatur deserunt! Aliquam at iusto quibusdam consectetur
            eos hic architecto ullam autem itaque! Adipisci cupiditate enim
            eligendi veniam voluptates dolorum ullam quaerat expedita?
          </p>
        </div>
      </div>
    </div>
    

    <div class="q-pa-md bg-white">
      <div class="q-col-gutter-md row items-start">
        <div class="col-8">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            quibusdam cumque nobis laudantium pariatur accusamus architecto,
            voluptates deserunt necessitatibus, dignissimos id. Aperiam illum
            voluptatibus sed similique, voluptatum sit ullam, maxime sint
            numquam, expedita dicta quo dolores odio perspiciatis eligendi
            ratione debitis aut est libero iure iusto architecto nihil.
            Temporibus fuga tempore nobis fugit repellendus consequatur sit
            adipisci aspernatur deserunt! Aliquam at iusto quibusdam consectetur
            eos hic architecto ullam autem itaque! Adipisci cupiditate enim
            eligendi veniam voluptates dolorum ullam quaerat expedita?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            quibusdam cumque nobis laudantium pariatur accusamus architecto,
            voluptates deserunt necessitatibus, dignissimos id. Aperiam illum
            voluptatibus sed similique, voluptatum sit ullam, maxime sint
            numquam, expedita dicta quo dolores odio perspiciatis eligendi
            ratione debitis aut est libero iure iusto architecto nihil.
            Temporibus fuga tempore nobis fugit repellendus consequatur sit
            adipisci aspernatur deserunt! Aliquam at iusto quibusdam consectetur
            eos hic architecto ullam autem itaque! Adipisci cupiditate enim
            eligendi veniam voluptates dolorum ullam quaerat expedita?
          </p>
        </div>
        <div class="col-4 text-right">
          Picture of me
          <q-img src="../assets/avatarimg1.jpg" :ratio="16 / 9" />
        </div>
      </div>
    </div>

    <div class="q-pa-md bg-grey text-center">
      <h3>Specialties</h3>
      <div class="q-col-gutter-md row items-start">
        <div class="col-8 text-black">
          <q-icon class="q-mx-md" name="fa-brands fa-node-js" size="xl" />
          <q-icon class="q-mx-md" name="fa-brands fa-vuejs" size="xl" />
          <q-icon class="q-mx-md" name="fa-brands fa-react" size="xl" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
