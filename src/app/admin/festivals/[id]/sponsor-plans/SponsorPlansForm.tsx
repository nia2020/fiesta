"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Plan = {
  id: string;
  planName: string;
  amount: number;
  benefits: string | null;
  displayOrder: number;
};

export function SponsorPlansForm({
  festival,
}: {
  festival: { id: string; sponsorPlans: Plan[] };
}) {
  const [plans, setPlans] = useState<Plan[]>(festival.sponsorPlans);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  function addPlan() {
    setPlans([
      ...plans,
      {
        id: `new-${Date.now()}`,
        planName: "",
        amount: 0,
        benefits: "",
        displayOrder: plans.length,
      },
    ]);
  }

  function removePlan(id: string) {
    setPlans(plans.filter((p) => p.id !== id));
  }

  function updatePlan(
    id: string,
    field: keyof Plan,
    value: string | number
  ) {
    setPlans(
      plans.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(
      `/api/admin/festivals/${festival.id}/sponsor-plans`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plans: plans.map((p, i) => ({
            id: p.id.startsWith("new-") ? undefined : p.id,
            planName: p.planName,
            amount: p.amount,
            benefits: p.benefits || null,
            displayOrder: i,
          })),
        }),
      }
    );
    setSaving(false);
    if (res.ok) router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {plans.map((plan, i) => (
        <div
          key={plan.id}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-[var(--foreground)]">プラン {i + 1}</h3>
            <button
              type="button"
              onClick={() => removePlan(plan.id)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              削除
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                プラン名
              </label>
              <input
                type="text"
                value={plan.planName}
                onChange={(e) =>
                  updatePlan(plan.id, "planName", e.target.value)
                }
                required
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                金額（円）
              </label>
              <input
                type="number"
                value={plan.amount || ""}
                onChange={(e) =>
                  updatePlan(plan.id, "amount", parseInt(e.target.value) || 0)
                }
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                特典
              </label>
              <textarea
                value={plan.benefits ?? ""}
                onChange={(e) =>
                  updatePlan(plan.id, "benefits", e.target.value)
                }
                rows={3}
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPlan}
        className="rounded-lg border border-dashed border-[var(--border)] px-4 py-2 text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/5"
      >
        + プランを追加
      </button>
      <div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-[var(--primary)] px-6 py-2 font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-hover)] disabled:opacity-50"
        >
          {saving ? "保存中..." : "保存"}
        </button>
      </div>
    </form>
  );
}
