import { SocialIcon, SocialIconProps } from 'react-social-icons';

export const KaueSocialIcon: React.FC<SocialIconProps> = ({ url }) => {
  return (
    <SocialIcon
      url={url}
      bgColor="transparent"
      className="border-2 border-gray-400 rounded-full hover:bg-black hover:border-none"
      fgColor="#fff"
      style={{
        width: '46px',
        height: '46px',
        marginRight: '18px'
      }}
    />
  );
};
