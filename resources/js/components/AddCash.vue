<template>
  <div>
    <div class="main">
      <h3 class="page-title">{{ page_title }}</h3>
      <div class="main-content">
        <div>
            <el-form :model="addform" ref="addform" class="demo-ruleForm" label-position="top" label-width="100px" :rules="addformRules">
                <el-row :gutter="24">
                    <el-col :span="16" :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <div class="card mb-4">
                            <div class="card-body">
                                <el-skeleton style="width: 100%" :loading="loading" animated>
                                    <template slot="template">
                                        <el-skeleton :rows="7" />
                                    </template>
                                    <template>
                                        <el-form-item label="Name" prop="name">
                                            <el-input v-model="addform.name" required></el-input>
                                        </el-form-item>
                                        <el-form-item label="Balance" prop="balance">
                                            <el-input type="number" v-model="addform.balance" required></el-input>
                                        </el-form-item>
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <el-skeleton style="width: 100%" :loading="loading" animated>
                                    <template slot="template">
                                        <el-skeleton :rows="10" />
                                    </template>
                                    <template>
                                        <el-form-item label="Currency" prop="currency">
                                            <el-select v-model="addform.currency" placeholder="Select" required>
                                                <el-option
                                                    v-for="item in currencies"
                                                    :key="item.id"
                                                    :label="item.name + ' (' + item.symbol + ')'"
                                                    :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="Active?" prop="active">
                                            <el-switch v-model="addform.active" required></el-switch>
                                        </el-form-item>
                                        <el-form-item label="In budget planning?" prop="in_budget">
                                            <el-switch v-model="addform.in_budget" required></el-switch>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="success" icon="el-icon-plus" @click="submitAddForm()">{{ action_button_text }}</el-button>
                                        </el-form-item>
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCash',
  props: ['homeurl'],
  data() {
    return {
      loading: true,
      page_title: 'Add Cash',
      action_button_text: 'Add',
      currencies: [],
      addform: {
        'name': '',
        'balance': '',
        'currency': '',
        'active': false,
        'in_budget': false,
      },
      addformRules: {
          name: [
            { required: true, message: 'Required field', trigger: 'blur' },
          ],
          balance: [
            { required: true, message: 'Required field', trigger: 'blur' },
          ],
          currency: [
            { required: true, message: 'Required field', trigger: 'change' },
          ],
      },
    };
  },
  components: {
  },
  methods: {
    async getCurrencies() {
      try {
        const {data} = await axios.get(`${this.homeurl}/currencies/data/1`)
        this.currencies = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    submitAddForm() {
        this.$refs['addform'].validate((valid) => {
            if (valid) {
                this.addItem()
            } else {
                return false;
            }
        });
    },
    async addItem() {
        try {
            this.loading = true
            let formData = new FormData();
            formData.append('name', this.addform.name)
            formData.append('balance', this.addform.balance)
            formData.append('currency', Number(this.addform.currency))
            formData.append('active', Number(this.addform.active))
            formData.append('in_budget', Number(this.addform.in_budget))
            await axios.post(`${this.homeurl}/add/createcash`, formData)
            this.$notify.success({
                title: 'Cash created!',
            });
            this.$router.push({name: 'CashesList'})
        } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application Error!',
            });
      }
    },
  },
  watch: {
  },
  async mounted() {
    await this.getCurrencies()
    this.loading = false
  },
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
