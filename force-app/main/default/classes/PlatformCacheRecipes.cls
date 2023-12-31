/**
 * @description Illustrates how to programatically use the Platform Cache
 * feature of Salesforce. Many of these recipes are, taken together, not very
 * DRY (don't repeat yourself). However, they're intentionally listed here as a
 * way of repeatedly demonstrating Platform Cache functionality
 *
 * @group Platform Cache Recipes
 */
public with sharing class PlatformCacheRecipes {
    /**
     * @description Defines the default cache partition for use in this class.
     */
    private static String defaultPartition = 'local.cachepractice';
    private static Integer defaultTime = 3600;
    
    public static Integer getDefaultTime(){
        return defaultTime;
    }
    
    public static void setDefaultTime(Integer timeInSeconds){
        defaultTime = timeInSeconds;
    }
    
    public static String getPartitionName(){
        return defaultPartition;
    }
    
    public static void setPartitionName(String partitionName){
        defaultPartition = partitionName;
    }

    /**
     * @description internal custom exception class.
     */
    public class CacheException extends Exception {
    }

    /**
     * Enum for partition type.
     */
    public enum PartitionType {
        SESSION,
        ORG
    }

    /**
     * These methods are for the Session Cache
     * Max TTL for Session partion is 8 hours.
     */

    /**
     * @description   Stores a value in the Session cache with a default
     * timeout of 3600 seconds (1hr)
     * @param key     String name of key used to store the value in the cache.
     * @param toStore String value to store in the cache.
     */
    public static void storeValuesAsStringinSession(String key, String toStore) {
        PlatformCacheRecipes.storeValueInSessionCache(key, toStore, defaultTime);
    }
    
    /**
     * @description   Stores a value in the Session cache with a default
     * timeout of 3600 seconds (1hr)
     * @param key     String name of key used to store the value in the cache.
     * @param toStore List String value to store in the cache.
     */
    public static void storeValuesAsListinSession(String key, List<String> toStore) {
        PlatformCacheRecipes.storeValueInSessionCache(key, toStore, defaultTime);
    }
    
    /**
     * @description   Stores a value in the Session cache with a default
     * timeout of 3600 seconds (1hr)
     * @param key     String name of key used to store the value in the cache.
     * @param toStore Map value to store in the cache.
     */
    public static void storeValuesAsMapinSession(String key, Map<String,String> toStore) {
        PlatformCacheRecipes.storeValueInSessionCache(key, toStore, defaultTime);
    }

    /**
     * @description   Stores a value in the Session cache with a custom timeout.
     * @param key     String Name to the store the value under.
     * @param toStore String to store in the cache
     * @param ttl     Integer Time To Live (ttl) is the number of seconds this
     * item will remain in cache.
     */
    public static void storeValueInSessionCache(
        String key,
        Object toStore,
        Integer ttl
    ) {
        getDefaultPartition(PartitionType.SESSION).put(key, toStore, ttl);
    }

    /**
     * @description Retrieves a value from the cache identified by key
     * @param key   String key of which value to retrieve.
     * @return     `String`
     */
    public static String getStringValueFromSessionCache(String key) {
        return (String) getValueFromSessionCache(key);
    }
    
    /**
     * @description Retrieves a value from the cache identified by key
     * @param key   String key of which value to retrieve.
     * @return     `List<String>`
     */
    public static List<String> getListAsValueFromSessionCache(String key) {
        return (List<String>) getValueFromSessionCache(key);
    }
    
    /**
     * @description Retrieves a value from the cache identified by key
     * @param key   String key of which value to retrieve.
     * @return     `String`
     */
    public static Map<String,String> getMapAsValueFromSessionCache(String key) {
        return (Map<String,String>) getValueFromSessionCache(key);
    }
    
    /**
     * @description Retrieves a value from the cache identified by key
     * @param key   String key of which value to retrieve.
     * @return     `Object`
     */
    public static Object getValueFromSessionCache(String key) {
        Cache.Partition defPartition = getDefaultPartition(
            PartitionType.SESSION
        );
        if (defPartition.contains(key)) {
            return defPartition.get(key);
        }
        return null;
    }

    /**
     * @description removes a key/value from the cache manually
     * @param key   String key to remove
     * @exception   CacheException custom exception when key not found.
     */
    public static void removeKeyFromSessionCache(String key) {
        Cache.Partition defPartition = getDefaultPartition(
            PartitionType.SESSION
        );
        if (defPartition.contains(key)) {
            defPartition.remove(key);
        } else {
            throw new CacheException('key not found');
        }
    }

    /**
     * These methods relate to the ORG cache
     * Max TTL for Org Cache is 48 hours.
     */

    /**
     * @description   Stores a value in the Org cache with a default
     * timeout of 3600 seconds (1hr)
     * @param key     String name of key used to store the value in the cache.
     * @param toStore String value to store in the cache.
     */
    public static void storeValueInOrgCache(String key, String toStore) {
        storeValueInOrgCache(key, toStore, 3600);
    }
    /**
     * @description   Stores a value in the Org cache with a custom timeout.
     * @param key     String Name to the store the value under.
     * @param toStore String to store in the cache
     * @param ttl     Integer Time To Live (ttl) is the number of seconds this
     * item will remain in cache.
     */
    public static void storeValueInOrgCache(
        String key,
        String toStore,
        Integer ttl
    ) {
        getDefaultPartition(PartitionType.ORG).put(key, toStore, ttl);
    }

    /**
     * @description Retrieves a value from the cache identified by key
     * @param key   String key of which value to retrieve.
     * @return     `String`
     */
    public static String getValuefromOrgCache(String key) {
        Cache.Partition defPartition = getDefaultPartition(PartitionType.ORG);
        if (defPartition.contains(key)) {
            return (String) defPartition.get(key);
        }
        return null;
    }

    /**
     * @description removes a key/value from the cache manually
     * @param key   String key to remove
     * @exception   CacheException custom exception when key not found.
     */
    public static void removeKeyFromOrgCache(String key) {
        Cache.Partition defPartition = getDefaultPartition(PartitionType.ORG);
        if (defPartition.contains(key)) {
            defPartition.remove(key);
        } else {
            throw new CacheException('key not found');
        }
    }

    /**
     * @description returns a Cache.Partition for a given name, and type
     * @param type  Enum of .SESSION or .ORG
     * @return     `Cache.Partition`
     */
    public static Cache.Partition getDefaultPartition(PartitionType type) {
        switch on type {
            when SESSION {
                return (Cache.Partition) Cache.Session.getPartition(
                    getPartitionName()
                );
            }
        }
        return (Cache.Partition) Cache.Org.getPartition(getPartitionName());
    }
}