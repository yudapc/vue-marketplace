<template>
  <div>
    <h1>{{ dataProduct.name }}</h1>
    <div class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nihil veniam quaerat similique maxime, consequatur veritatis ullam maiores consequuntur aperiam exercitationem asperiores dolore nemo quae eum autem quos libero illum. Ducimus, accusamus a. Numquam error quaerat earum veniam nesciunt qui distinctio, libero voluptates fugiat, ipsa, perferendis fugit. Ab delectus facere ducimus vel at eum dolores rem magni, tenetur minus sit maiores aliquam vitae eveniet, alias reiciendis! Soluta rem nam minima eligendi commodi quidem dolor quod alias asperiores veniam quam, molestias exercitationem sit repellat nihil aperiam velit. Harum aliquid quibusdam, magni consequuntur mollitia ullam laudantium. Blanditiis minus incidunt ratione necessitatibus sequi nisi sit dicta nam assumenda, quis possimus dolor, architecto corrupti ullam velit labore sint aliquam quidem voluptatibus repellendus? Dolorem eum temporibus autem quis velit dicta magni iure itaque laudantium. A et error dolor, atque sequi dolores. Cumque accusamus minima quasi fuga similique adipisci maiores aspernatur eum accusantium ratione. Mollitia fuga repellendus hic suscipit corporis molestias voluptates? Commodi labore quam enim delectus vitae? Libero tempora nemo, harum ratione repellat natus, doloremque, quidem molestiae corrupti necessitatibus assumenda voluptate esse quibusdam! Neque vero animi consequatur illum harum at tenetur maxime magnam quasi? Molestiae quo architecto distinctio explicabo quia id doloremque quis culpa officiis commodi, dolor dolorem voluptas excepturi perferendis ratione, sequi sunt. Aut libero, obcaecati amet ratione incidunt at soluta minus vitae perferendis nihil in blanditiis possimus. Perspiciatis doloremque ipsa impedit odio voluptatem non fugiat voluptatibus veniam earum similique? Accusantium modi veniam quasi ipsam vero unde voluptas maxime nulla? Assumenda, asperiores eius earum saepe in iure veritatis temporibus eos minima voluptates repellendus amet iusto harum minus illo alias, cum, vitae nesciunt magnam voluptatibus molestiae veniam sequi hic nostrum? Culpa quae aliquid incidunt architecto et quo non. At, quibusdam id est iure illum ipsa voluptatibus hic placeat ad perspiciatis atque autem exercitationem. Esse molestias reprehenderit eveniet placeat in architecto sunt dolores, adipisci, eos deleniti aut unde soluta voluptate officiis, est nesciunt quia odio recusandae quibusdam eum consectetur possimus repellendus ab voluptas. Nihil illo architecto ipsum, iure quis culpa voluptatibus officia. Veritatis quas optio excepturi fugiat dolorum, nobis at voluptate, quos, possimus ipsam aliquam nostrum! Voluptatibus perspiciatis incidunt iure nisi autem culpa saepe omnis, tempora asperiores recusandae? Commodi voluptates molestiae facere vitae voluptatum ad voluptatem ex. Eum incidunt odit quibusdam maiores officiis assumenda velit perferendis, ea illum non ipsa, optio accusantium laudantium quaerat iure commodi animi, sit illo repellat. Vel consectetur fugiat magni impedit explicabo totam harum necessitatibus inventore dolor, reiciendis quasi? Culpa numquam reprehenderit ratione voluptatum amet voluptate adipisci vel fuga odio, itaque repellendus ducimus nihil laboriosam veritatis, labore praesentium atque vitae, maxime nostrum placeat blanditiis? Tempora quod numquam, deserunt esse molestias similique cupiditate voluptatibus sint doloribus reprehenderit sunt illum culpa quam quis excepturi iure. Perferendis nulla id harum labore unde illum, voluptates corporis molestiae, dolor excepturi eum quasi, in eligendi. Nobis, cum omnis ducimus culpa odit esse dolorem molestias maxime soluta ipsa beatae. Harum repellendus quasi eum assumenda vitae, sapiente fugit quam deserunt ullam molestiae, architecto quos ad maiores libero saepe facere! Ab.</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductDetail',
  data() {
    return {
      dataProduct: {}
    }
  },
  methods: {
    async getProductDetail(id) {
      try {
        const response = await axios.get("https://dev-api.bisnisblanja.my.id/api/v1/catalog/products-new/" + id);
        const dataUIComponent = response.data;
        this.dataProduct = dataUIComponent;
      } catch (error) {
        console.log('Errornya: ', error);
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProductDetail(id);
  }
}
</script>