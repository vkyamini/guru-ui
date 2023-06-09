function showUploadWidget(updateState) {
  window.cloudinary.openUploadWidget(
    {
      cloudName: "dpaw5kaby",
      uploadPreset: "uebmpfwh",
      sources: ["local", "url"],
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#0078FF",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#0078FF",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1",
        },
        fonts: {
          default: {
            active: true,
          },
        },
      },
    },
    (err, data) => {
      if (!err && data.event === "success") {
        updateState(data.info.url);
        return;
      }
    }
  );
}

export default showUploadWidget;
