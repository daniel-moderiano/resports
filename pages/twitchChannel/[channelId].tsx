import { useGetTwitchChannel } from '../../hooks/useGetTwitchChannel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

const TwitchChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;

  const { isLoading, isError, data, error } = useGetTwitchChannel("145780645");

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);

  //   }
  // }, [data])

  return (
    <div>
      {isLoading && (<div>Twitch loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      {data && (
        <section>
          <div>
            <h2>{data.channelData.displayName}</h2>
            <p>{data.userData.description}</p>
            <Image src={data.userData.profilePictureUrl} alt={`${data.channelData.displayName} channel thumbnail`} height={100} width={100} layout="fixed" />
            {data.userData.offlinePlaceholderUrl && (
              <Image src={data.userData.offlinePlaceholderUrl} alt={`${data.channelData.displayName} channel banner`} height={100} width={100} layout="fixed" />
            )}
          </div>
        </section>
      )}
    </div>
  )
}

export default TwitchChannel