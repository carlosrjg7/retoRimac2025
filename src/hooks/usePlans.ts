import { useEffect, useState } from "react";
import type { Plan } from "@/types";
import { getPlans } from "@/api/PlanApi";

export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const data = await getPlans();
        setPlans(data || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchPlans();
  }, []);

  return { plans, loading, error };
}
