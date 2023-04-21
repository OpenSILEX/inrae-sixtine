/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
import SixtineLoginComponent from "./components/layout/SixtineLoginComponent.vue";
import SixtineHeaderComponent from "./components/layout/SixtineHeaderComponent.vue";
import SixtineHomeComponent from "./components/layout/SixtineHomeComponent.vue";
import ForgotPassword from "./components/layout/ForgotPassword.vue";
import ResetPassword from "./components/layout/ResetPassword.vue";

export default {
    install(Vue, options) {
    },
    components: {
        "inrae-sixtine-SixtineHomeComponent": SixtineHomeComponent,
        "inrae-sixtine-SixtineLoginComponent": SixtineLoginComponent,
        "inrae-sixtine-SixtineHeaderComponent": SixtineHeaderComponent,
        "inrae-sixtine-ForgotPassword": ForgotPassword,
        "inrae-sixtine-ResetPassword": ResetPassword
    },
    lang: {
        "fr": require("./lang/sixtine-fr.json"),
        "en": require("./lang/sixtine-en.json"),
    }
};