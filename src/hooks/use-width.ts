import { useMemo } from "react";

export const useWidth = () => {
	const screenWidth = window.screen.width;

	return useMemo(() => {
		const views = {
			isMobileWidth: false,
			isDesktopWidth: false,
		};
		if (screenWidth < 640) {
			return { ...views, isMobileWidth: true };
		}
		if (screenWidth >= 640) {
			return { ...views, isDesktopWidth: true };
		}

		return views;
	}, [screenWidth]);
};
