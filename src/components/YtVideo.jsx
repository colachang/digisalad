import React, { useState, useMemo } from 'react';
import '../styles/components/ytvideo.scss';
import playIcon from '../assets/media_play.svg';

/**
 * Video component embeds a YouTube video with optional preview, play button, and auto-play.
 *
 * Props:
 * - videoId (string): YouTube video ID (required).
 * - width (string): CSS width of the container (e.g., '100%', '32rem') (default '100%').
 * - aspectRatio (string): Aspect ratio in 'width:height' form (e.g., '16:9') (default '16:9').
 * - autoPlay (boolean): Whether to start playback immediately (default false).
 * - previewImage (string): URL of preview image (optional).
 * - showPlayButton (boolean): Whether to show a play button overlay on preview (default true).
 * - height (string): Optional container height (default '').
 * - fillContainer (boolean): If true, video fills parent container dimensions (default false).
 */
export default function YtVideo({
    videoId,
    width = '100%',
    aspectRatio = '16:9',
    autoPlay = false,
    previewImage = '',
    showPlayButton = true,
    height = '',
    fillContainer = false,
    mask = false,
}) {
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    // aspect ratio
    const paddingBottom = useMemo(() => {
        const [w, h] = aspectRatio.split(':').map(Number);
        return `${(h / w) * 100}%`;
    }, [aspectRatio]);

    // calculate width when height is provided
    // const [ratioW, ratioH] = aspectRatio.split(':').map(Number);
    // const widthFromHeight = height ? `calc(${height} * (${ratioW} / ${ratioH}))` : width;

    const iframeSrc = useMemo(() => {
        const params = new URLSearchParams({
            autoplay: isPlaying ? '1' : '0',
            mute: '1',
            controls: '0',
            loop: '1',
            playlist: videoId,
            modestbranding: '1',
            rel: '0',
            disablekb: '1',
            iv_load_policy: '3',
            fs: '0',
            showinfo: '0'
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }, [videoId, isPlaying]);

    const thumbnail = previewImage || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div
            className="video"
            style={fillContainer ? { width: '100%', height: '100%' } : undefined}
        >
            <div
                className={`video__container ${mask ? 'video__container--mask' : ''}`}
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    ...(fillContainer
                        ? {
                            width: '100%',
                            height: '100%',
                        }
                        : height
                            ? {
                                width: '100%',
                                height,
                            }
                            : {
                                width,
                                paddingBottom,
                                height: 0,
                            }),
                    ...(thumbnail
                        ? {
                            backgroundImage: `url(${thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }
                        : {}),
                }}
            >
                {(!isPlaying && thumbnail) ? (
                    <>
                        <img
                            src={thumbnail}
                            alt="Video preview"
                            className="video__preview"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', cursor: showPlayButton ? 'pointer' : 'default' }}
                            onClick={() => setIsPlaying(true)}
                        />
                        {showPlayButton && (
                            <img
                                src={playIcon}
                                alt="Play video"
                                className="video__play_button"
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
                                onClick={() => setIsPlaying(true)}
                            />
                        )}
                    </>
                ) : (
                    <iframe
                        src={iframeSrc}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className={`video__iframe${autoPlay && !previewImage ? ' video__iframe_banner' : ''}`}
                        title="Embedded Video"
                    />
                )}
            </div>
        </div>
    );
}