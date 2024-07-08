
export default {
  name: 'HomePage',
  methods:{
    goToCustomerManagement(){
      this.$router.push('/customer-management');
    },
    goToTechManagement(){
      this.$router.push('/tech-management');
    }
  }
}
