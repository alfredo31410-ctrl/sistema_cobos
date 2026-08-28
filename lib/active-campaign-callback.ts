export type ActiveCampaignCallback = (...args: unknown[]) => void;

type CallbackOptions = Readonly<{
  previousCallback?: ActiveCampaignCallback;
  matchesForm: (id: unknown) => boolean;
  onSuccess: () => void;
}>;

export function createActiveCampaignCallback({
  previousCallback,
  matchesForm,
  onSuccess,
}: CallbackOptions): ActiveCampaignCallback {
  let processed = false;

  return (...args: unknown[]) => {
    try {
      previousCallback?.(...args);
    } finally {
      if (processed || !matchesForm(args[0])) return;

      processed = true;
      onSuccess();
    }
  };
}
