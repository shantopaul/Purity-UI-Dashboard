import ProfileHeader from "../components/profile/ProfileHeader";
import PlatformSettings from "../components/profile/PlatformSettings";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileProjects from "../components/profile/ProfileProjects";

export default function Profile() {
  return (
    <div className="flex flex-col gap-6">
      {/* Banner & Header overlap */}
      <ProfileHeader />

      {/* Settings & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
        <PlatformSettings />
        <ProfileInfo />
      </div>

      {/* Projects Grid */}
      <ProfileProjects />
    </div>
  );
}
