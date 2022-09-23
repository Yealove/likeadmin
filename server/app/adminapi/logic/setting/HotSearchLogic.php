<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\logic\setting;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;


/**
 * 热门搜素逻辑
 * Class HotSearchLogic
 * @package app\adminapi\logic\setting
 */
class HotSearchLogic extends BaseLogic
{

    /**
     * @notes 获取配置
     * @return array
     * @author 段誉
     * @date 2022/9/5 18:48
     */
    public static function getConfig()
    {
        $config = [
            // 功能状态 0-关闭 1-开启
            'status' => ConfigService::get('hot_search', 'status', 1),
            // 热门搜索数据
            'data' => ConfigService::get('hot_search', 'data', []),
        ];

        if (!empty($config['data'])) {
            $config['data'] = array_map(function ($value) {
                if (isset($value['sort'])) {
                    $value['sort'] = intval($value['sort']);
                }
                return $value;
            }, $config['data']);
        }

        return $config;
    }


    /**
     * @notes 设置热门搜搜
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/9/5 18:58
     */
    public static function setConfig($params)
    {
        try {
            if (empty($params['data'])) {
                $data = [];
            } else {
                $data = array_map(function ($value) {
                    if (empty($value['keyword'])) {
                        throw new \Exception('请填写完整关键词');
                    }
                    if (empty($value['sort'])) {
                        $value['sort'] = '0';
                    }
                    return $value;
                }, $params['data']);
            }

            $status = empty($params['status']) ? 0 : $params['status'];

            ConfigService::set('hot_search', 'status', $status);
            ConfigService::set('hot_search', 'data', $data);

            return true;
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }


}