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
                                            <el-button type="success" icon="el-icon-check" @click="submitAddForm()">{{ action_button_text }}</el-button>
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
  name: 'EditCash',
  props: ['homeurl'],
  data() {
    return {
      loading: true,
      page_title: 'Edit Cash',
      id: this.$route.params.id,
      action_button_text: 'Save',
      item: {},
      currencies: [],
      addform: {
        'name': '',
        'start_balance': '',
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
    async getData() {
      try {
        const {data} = await axios.get(`${this.homeurl}/edit/cash/data/${this.id}`)
        this.item = data.item;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
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
                this.saveItem()
            } else {
                return false;
            }
        });
    },
    async saveItem() {
        try {
            this.loading = true
            await axios.put(`${this.homeurl}/edit/savecash/${this.id}`, {
                name: this.addform.name,
                balance: this.addform.balance,
                currency: this.addform.currency,
                active: Number(this.addform.active),
                in_budget: Number(this.addform.in_budget),
            })
            this.$notify.success({
                title: 'Cash saved!',
            });
            this.loading = false
        } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application Error!',
            });
      }
    },
    getCurr(id) {
        id = Math.floor(id);
        const theItem = this.currencies.filter(_=>_.id===id);
        if(typeof theItem[0] === 'undefined') {
            return {
                id: '',
                name: 'Select...',
            };
        }
        return theItem[0].id;
    },
  },
  watch: {
  },
  async mounted() {
    await this.getData()
    await this.getCurrencies()
    this.$nextTick(() => {
        this.addform.name = this.item[0].name
        this.addform.balance = this.item[0].current_balance
        this.addform.start_balance = this.item[0].start_balance
        this.addform.currency = this.getCurr(this.item[0].currency)
        this.addform.active = Boolean(this.item[0].active)
        this.addform.in_budget = Boolean(this.item[0].in_budget)
    });
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
