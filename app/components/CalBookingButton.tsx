"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_LINK = "juan-linares-slxgwn/gorditoblendz";

export default function CalBookingButton({ className, children }: { className?: string; children: React.ReactNode }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "gorditoblendz" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    return (
        <button
            data-cal-namespace="gorditoblendz"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            className={className}
        >
            {children}
        </button>
    );
}
