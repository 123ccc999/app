import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import './assets/base.css'
import router from './router';


// 1. 引入你需要的组件
import { Button,Tab, Tabs,TreeSelect, Stepper,ActionBar, ActionBarIcon, ActionBarButton,Toast, Checkbox, CheckboxGroup,SubmitBar,ContactCard,Card,Dialog,AddressList,AddressEdit,Form, Field, CellGroup    } from 'vant';
import { Icon } from 'vant';

// 2. 引入组件样式
import 'vant/lib/index.css';
import store from './store';

const app = createApp(App)

app.use(router).use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBar).use(ActionBarButton).use(ActionBarIcon).use(Toast).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(ContactCard).use(Card).use(Dialog).use(AddressList ).use(AddressEdit)
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
app.use(store)