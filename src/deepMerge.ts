function dig(newVersion: any, oldVersion: any) {
  oldVersion = { ...newVersion, ...oldVersion };

  Object.keys(newVersion).forEach((key) => {
    // @ts-ignore
    if (typeof newVersion[key] === 'object' && !(newVersion[key] instanceof Array)) {
      oldVersion = {
        ...newVersion,
        ...oldVersion,
        [key]: dig(newVersion[key], oldVersion[key]),
        appVersion: newVersion.appVersion
      };
      if (oldVersion.appVersion) oldVersion.appVersion = newVersion.appVersion;
      // if (Number.isNaN(oldVersion[key])) {
      //   console.log('deepmerge');

      //   oldVersion[key] = newVersion[key]
      // };
      if (oldVersion[key] === null) oldVersion[key] = newVersion[key];
    }
  });

  return oldVersion;
}

function deepMerge(newVersion: any, oldVersion: any) {
  oldVersion = { ...newVersion, ...oldVersion };
  oldVersion = dig(newVersion, oldVersion);
  oldVersion.appVersion = newVersion.appVersion;
  return oldVersion;
}

export default deepMerge;
