import IconProtection from "@/assets/images/IcProtectionLight.png";
import IconUserPlus from "@/assets/images/IcAddUserLight.png";
import IconHome from "@/assets/images/IcHomeLight.png";
import IconHospital from "@/assets/images/IcHospitalLight.png";

export const ChoicePlanOptions = [
  {
    title: "Para mí",
    subtitle: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    valueOption: "myself",
    icon: IconProtection,
  },
  {
    title: "Para alguien más",
    subtitle:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    icon: IconUserPlus,
    valueOption: "someone-else",
  },
];

export const ICONS_PLANS = [IconHome, IconHospital, IconHome];
