import { colors } from "../components/theme/theme-style";
import ClientDetail from "../screens/client/detail";
import ClientForm from "../screens/client/form";
import Login from "../screens/login";
import MessageView from "../screens/message/message";
import TabNavigator from "../screens/navigation/tabs";
import CartList from "../screens/orders/list";
import Order from "../screens/orders/orders";
import OrderList from "../screens/orders/orders-list";
import ProductDetail from "../screens/productDetail";

const headerHide = { headerShown: false };

const headerCustom = ( title ) => {
    return {
        title: title,
        headerShown: true,
        headerStyle: {
            backgroundColor: colors.default
        },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };
};

const screens = [
    {
        name: "TabNavigator",
        component: TabNavigator,
        options: headerHide
    },
    {
        name: "Order",
        component: Order,
        options: headerCustom("Order Detail")
    },
    {
        name: "ClientDetail",
        component: ClientDetail,
        options: headerCustom("Client Details"),
    },
    {
        name: "ClientForm",
        component: ClientForm,
        options: headerCustom("Register Client"),
    },
    {
        name: "Cart",
        component: CartList,
        options: headerCustom("Cart"),
    },
    {
        name: "OrderList",
        component: OrderList,
        options: headerCustom("Orders"),
    },
    {
        name: "Login",
        component: Login,
        options: headerHide,
    },
    {
        name: "ProductDetail",
        component: ProductDetail,
        options: headerCustom(""),
    },
    {
        name: "MessageView",
        component: MessageView,
        options: headerHide,
    }
];

export default screens;