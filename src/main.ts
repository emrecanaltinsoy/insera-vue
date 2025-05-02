import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// PrimeVue components
import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'
import Image from 'primevue/image'
import Tag from 'primevue/tag'
import MultiSelect from 'primevue/multiselect'
import IconField from 'primevue/iconfield'
import ConfirmPopup from 'primevue/confirmpopup'
import Tooltip from 'primevue/tooltip'
import ConfirmDialog from 'primevue/confirmdialog'
import Checkbox from 'primevue/checkbox'
import Menu from 'primevue/menu'
import InputOtp from 'primevue/inputotp'
import ProgressSpinner from 'primevue/progressspinner'
import FloatLabel from 'primevue/floatlabel'
import ButtonGroup from 'primevue/buttongroup'
import Skeleton from 'primevue/skeleton'
import InputIcon from 'primevue/inputicon'

// Services
import Toast from 'primevue/toast'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
})
app.use(router)

// Register PrimeVue components with 'P' prefix to avoid linter errors
app.component('PButton', Button)
app.component('PCard', Card)
app.component('PMenubar', Menubar)
app.component('PInputText', InputText)
app.component('PInputNumber', InputNumber)
app.component('PDatePicker', DatePicker)
app.component('PSelect', Select)
app.component('PInputIcon', InputIcon)
app.component('PTextarea', Textarea)
app.component('PDataTable', DataTable)
app.component('PColumn', Column)
app.component('PDialog', Dialog)
app.component('PDivider', Divider)
app.component('PPanel', Panel)
app.component('PImage', Image)
app.component('PTag', Tag)
app.component('PToast', Toast)
app.component('PMultiSelect', MultiSelect)
app.component('PIconField', IconField)
app.component('PConfirmPopup', ConfirmPopup)
app.component('PConfirmDialog', ConfirmDialog)
app.component('PCheckbox', Checkbox)
app.component('PMenu', Menu)
app.component('PInputOtp', InputOtp)
app.component('PProgressSpinner', ProgressSpinner)
app.component('PFloatLabel', FloatLabel)
app.component('PButtonGroup', ButtonGroup)
app.component('PSkeleton', Skeleton)

// Register the directives
app.directive('tooltip', Tooltip)

app.mount('#app')
