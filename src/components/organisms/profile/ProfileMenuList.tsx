'use client';
import ProfileClientMenuItem from '@/components/molecules/profile/ProfileClientMenuItem';
import useProfileMenuList from './ProfileMenuList.hook';

const ProfileMenuList = () => {
  const { profileMenus } = useProfileMenuList();
  return (
    <div className="flex flex-col px-5">
      {profileMenus.map((profileMenu) => (
        <div key={profileMenu.title} className="mb-1 last:mb-0">
          <div className="mb-4 font-extralight text-[#AFAFAF]">{profileMenu.title}</div>
          {profileMenu.menus.map((menu) => (
            <ProfileClientMenuItem
              key={menu.id}
              iconSrc={menu.icon}
              text={menu.text}
              href={menu.href}
              onClick={menu.onClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileMenuList;
