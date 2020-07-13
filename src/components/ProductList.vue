<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable >
            <img
              slot="cover"
              alt="example"
              src="https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/dAfRZgpDaPcUnRxx4ZrnYsiKBXFoKZnpfJ2MQTHq.jpg"
            />
            <a-card-meta title="Kaos Kaki Adidas">
              <template slot="description">Rp 10.000</template>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable >
            <img
              slot="cover"
              alt="example"
              src="https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/dAfRZgpDaPcUnRxx4ZrnYsiKBXFoKZnpfJ2MQTHq.jpg"
            />
            <a-card-meta title="Sarung Tangan Keren">
              <template slot="description">Rp 10.000</template>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable >
            <img
              slot="cover"
              alt="example"
              src="https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/dAfRZgpDaPcUnRxx4ZrnYsiKBXFoKZnpfJ2MQTHq.jpg"
            />
            <a-card-meta title="Kaos Kaki Bola">
              <template slot="description">Rp 10.000</template>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable >
            <img
              slot="cover"
              alt="example"
              src="https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/dAfRZgpDaPcUnRxx4ZrnYsiKBXFoKZnpfJ2MQTHq.jpg"
            />
            <a-card-meta title="Gelas Cantik">
              <template slot="description">Rp 10.000</template>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
  min-height: 120px;
}

</style>