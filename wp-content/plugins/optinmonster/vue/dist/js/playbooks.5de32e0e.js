(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playbooks"],{"4d08":function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s("9173"),o=s("6073"),i=s("3b9f");const n=(e,t,s)=>{let a=document.getElementById(e);if(a)return a;const n=document.getElementsByTagName("head")[0]||document.documentElement;return a=document.createElement("script"),a.type="text/javascript",a.id=e,a.src=i["a"].apiJs(),a.async=!0,a.dataset.account=t,a.dataset.user=s,Object(o["isProduction"])()||(a.dataset.env=Object(o["isDevelopment"])()?"dev":o["currentEnv"]),n.appendChild(a),a},l={created(){this.listenApiLoaded(),Object(a["c"])(),Object(a["e"])(),Object(a["b"])(),Object(a["d"])(),Object(a["f"])(),this.$store.subscribe(e=>{const t=["templates/setLoadingPreview","templates/setPreviewing","templates/filterOptions","templates/templates","templates/permittedTypes","templates/recentTemplates","templates/popular","templates/setApiLoaded"],s=["route/ROUTE_CHANGED"];let a=e.type.startsWith("templates/")&&!t.includes(e.type);a||(a=s.includes(e.type)),a&&this.closeAllPreviews()})},beforeDestroy(){Object(a["c"])(!1),Object(a["e"])(!1),Object(a["d"])(!1),Object(a["b"])(!1),Object(a["f"])(!1)},methods:{listenApiLoaded(e="addEventListener"){["om.Api.init","om.Main.init","om.Campaigns.init","om.Campaign.init"].forEach(t=>document[e](t,this.setApiLoaded))},setApiLoaded(){this.listenApiLoaded("removeEventListener"),this.$store.commit("templates/setApiLoaded")},closeAllPreviews(){Object(a["a"])(),this.$store.commit("templates/setLoadingPreview",""),this.$store.commit("templates/setPreviewing","")},loadApiScript(e,t,s){return n(e,t,s)}}}},"55f6":function(e,t,s){},"795d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return e.reachedCampaignLimit?t("templates-limit-exceeded",{attrs:{"is-playbooks":!0}}):t("core-page",[t("div",{staticClass:"playbooks-page-wrapper dashboard-wrapper",class:{previewing:!1}},[t("common-page-tabnav",{attrs:{current:"playbooks",tabs:e.tabs}}),e.alerts.length?t("div",{staticClass:"container",staticStyle:{margin:"46px auto 40px"}},[t("core-alerts",{attrs:{alerts:e.alerts}})],1):e._e(),t("div",{staticClass:"playbooks-content"},[t("playbooks-intro"),e.isLoading?t("core-loading",{staticClass:"playbooks-loading"}):t("div",[e.hasRecommendations?t("playbooks-recommendations"):e._e(),t("playbooks-table")],1)],1),t("playbooks-upgrade-modal"),t("campaigns-modal-create-campaign",{attrs:{"from-playbook":!0}}),t("templates-modal-not-connected")],1)])},o=[],i=(s("14d9"),s("2f62")),n=s("72ff"),l=s("0ff5"),c=s("d009"),r=s("4d08"),p={mixins:[n["a"],r["a"],c["a"],l["a"]],computed:{...Object(i["f"])(["alerts"]),...Object(i["f"])("playbooks",["playbooks","previewing","filterOptions","selectedPlaybook"]),...Object(i["d"])(["connected","reachedCampaignLimit"]),...Object(i["d"])("playbooks",["hasRecommendations"]),isLoading(){return this.$store.getters.isLoading(["playbooks","rules","filterOptions"])},unavailableRules(){return this.selectedPlaybook.rules.filter(e=>!this.ruleAvailable(e))||[]}},watch:{selectedPlaybook(e){e&&this.handleUsePlaybook()}},created(){this.$store.dispatch("campaigns/fetchRulesetData").then(e=>{let t=e.rules;t.push(...e.bigCommerceRules),t.push(...e.eddRules),t.push(...e.shopifyRules),t.push(...e.wooCommerceRules),this.setRules(t)}).catch(()=>{}),this.filterOptions.length||this.$store.dispatch("templates/fetchFilterOptions").then(e=>{this.setFilterOptions(e)}).catch(()=>{}),this.playbooks.length||this.$store.dispatch("playbooks/fetchPlaybooksData").then(()=>{this.$store.getters.connected&&this.$store.dispatch("playbooks/fetchRecommendationsData").catch(()=>{})}).catch(()=>{}),this.setDismissedRecommendations(),this.loadApiScript("omwpapi-playbooks-apijs",this.$constants.PLAYBOOKS_PREVIEW_ACCOUNT,this.$constants.PLAYBOOKS_PREVIEW_USER)},methods:{...Object(i["e"])("playbooks",["setDismissedRecommendations","setRules","setFilterOptions","setUpgradeRule"]),handleUsePlaybook(){if(this.$store.commit("templates/setActiveTemplate",this.selectedPlaybook),!this.$store.getters.connected)return this.$modal.show("not-connected");if(this.unavailableRules.length){const e=["exit-intent","inactivity-time"].find(e=>this.unavailableRules.includes(e));return e&&this.setUpgradeRule(e),this.$modal.show("upgrade-modal")}this.$modal.show("create-campaign-modal")}}},d=p,m=(s("ae2e"),s("2877")),h=Object(m["a"])(d,a,o,!1,null,null,null);t["default"]=h.exports},ae2e:function(e,t,s){"use strict";s("55f6")},d009:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a={data(){return{tabs:{templates:{name:"Templates",route:{path:"templates",params:{tab:"popup"}}},playbooks:{name:"Playbooks",route:{path:"playbooks",params:{}}}}}}}}}]);
//# sourceMappingURL=playbooks.5de32e0e.js.map