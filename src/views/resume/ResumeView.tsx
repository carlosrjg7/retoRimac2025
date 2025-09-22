import { useQuotation } from "@/hooks/useQuotation";
import { useUser } from "@/hooks/useUser";
import Resume from "@/modules/resume/Resume";
// import { useNavigate } from "react-router-dom";

export default function ResumeView() {
  const { quotation /* updateQuotation */ } = useQuotation();
  const { user } = useUser();
  // const navigate = useNavigate();

  /* const handleBack = () => {
    updateQuotation({ planSelected: null, quotationFor: null });
    navigate("/plans");
  }; */

  if (!quotation || !user || !quotation.planSelected) {
    return null;
  }

  return (
    <div className='resume'>
      <Resume
        documentType={quotation.documentType}
        user={user}
        documentNumber={quotation.documentNumber}
        plan={quotation.planSelected!}
        phone={quotation.phoneNumber}
      />
    </div>
  );
}
