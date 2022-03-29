
import { colors } from "./components/theme/theme-style";
import ClientDetail from "./screens/client/detail";
import ClientForm from "./screens/client/form";
import ClientList from "./screens/client/list";
import Login from "./screens/login";
import MessageView from "./screens/message/message";
import TabNavigator from "./screens/navigation/tabs";
import Cart from "./screens/orders/cart";
import CartList from "./screens/orders/list";
import Order from "./screens/orders/orders";
import OrderList from "./screens/orders/orders-list";
import Product from "./screens/product";
import ProductDetail from "./screens/product-detail";
import Resources from "./screens/resources";
import CameraResource from "./screens/resources/camera";
import GPSResource from "./screens/resources/gps-location";

export function headerHide() {
    return { headerShown: false };
};
export function headerHideWithTitle(title) {
    return { headerShown: false, title: title };
};

export function headerCustom(title) {
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

export function tabScreens() {
    return [
        {
            name: "Product",
            component: Product,
            options: headerCustom(),
        },
        {
            name: "CartList",
            component: Cart,
            options: headerCustom("Orders"),
        },
        {
            name: "ClientList",
            component: ClientList,
            options: headerHideWithTitle("Client List"),
        },
        {
            name: "Resources",
            component: Resources,
            options: headerCustom("Resources"),

        }
    ];
}

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
    },
    {
        name: "CameraResource",
        component: CameraResource,
        options: headerCustom("Camera"),
    },
    {
        name: "GPSResource",
        component: GPSResource,
        options: headerCustom("GPS Location"),
    },

];

export default screens;