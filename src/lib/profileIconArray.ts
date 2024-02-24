export const ProfileIcons = {
  batgirl: "/images/profile/batgirl.png",
  batman: "/images/profile/batman.png",
  captain: "/images/profile/captain.png",
  captainmarvel: "/images/profile/captainmarvel.png",
  daredevil: "/images/profile/daredevil.png",
  deadpool: "/images/profile/deadpool.png",
  greenlantern: "/images/profile/greenlantern.png",
  groot: "/images/profile/groot.png",
  hulk: "/images/profile/hulk.png",
  ironman: "/images/profile/ironman.png",
  jocker: "/images/profile/jocker.png",
  nickfury: "/images/profile/nickfury.png",
  spidy: "/images/profile/spidy.png",
  thor: "/images/profile/thor.png",
  wolverine: "/images/profile/wolverine.png",
};

export type  ProfileImageType = keyof typeof ProfileIcons;

export const getImage = (profileImageName: keyof typeof ProfileIcons) => {
  return ProfileIcons[profileImageName];
};
