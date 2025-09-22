import { useQuotation } from "@/hooks/useQuotation";
import { useUser } from "@/hooks/useUser";
import Resume from "@/modules/resume/Resume";

export default function ResumeView() {
  const { quotation /* updateQuotation */ } = useQuotation();
  const { user } = useUser();

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
